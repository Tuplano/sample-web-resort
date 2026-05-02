import { useState, useTransition } from 'react'
import { Save, Plus, Trash2, RefreshCcw } from 'lucide-react'
import { useServerFn } from '@tanstack/react-start'

import type { AdminContentInput } from '@/features/admin/content.schemas'
import { saveAdminContent } from '@/features/admin/content.functions'
import { weeklyActivityDays } from '@/features/activities/activities.schemas'
import type { Accommodation } from '@/types/home'
import type { Amenity } from '@/types/amenities'
import type { Activity, WeeklyActivity } from '@/types/activities'
import type { DiningHighlight, MenuItem } from '@/types/dining'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'

type ContentAdminPageProps = {
  initialContent: {
    accommodations: Accommodation[]
    amenities: Amenity[]
    activities: Activity[]
    weeklyActivities: WeeklyActivity[]
    diningHighlights: DiningHighlight[]
    menuItems: MenuItem[]
  }
}

type DraftAccommodation = AdminContentInput['accommodations'][number]
type DraftAmenity = AdminContentInput['amenities'][number]
type DraftActivity = AdminContentInput['activities'][number]
type DraftWeeklyActivity = AdminContentInput['weeklyActivities'][number]
type DraftDiningHighlight = AdminContentInput['diningHighlights'][number]
type DraftMenuItem = AdminContentInput['menuItems'][number]

type EditorField<T> = {
  key: keyof T & string
  label: string
  kind: 'text' | 'textarea' | 'number' | 'select' | 'checkbox' | 'tags' | 'time'
  options?: Array<{ label: string; value: string }>
  placeholder?: string
  fullWidth?: boolean
}

const accommodationFields: EditorField<DraftAccommodation>[] = [
  { key: 'name', label: 'Name', kind: 'text' },
  { key: 'image', label: 'Image URL', kind: 'text', fullWidth: true },
  {
    key: 'description',
    label: 'Description',
    kind: 'textarea',
    fullWidth: true,
  },
  {
    key: 'size',
    label: 'Card size',
    kind: 'select',
    options: [
      { label: 'Large', value: 'large' },
      { label: 'Compact', value: 'compact' },
    ],
  },
  { key: 'tags', label: 'Tags', kind: 'tags', placeholder: 'Ocean View, Suite' },
  { key: 'guests', label: 'Guests', kind: 'text' },
  { key: 'area', label: 'Area', kind: 'text' },
  { key: 'beds', label: 'Beds', kind: 'text' },
  { key: 'price', label: 'Price', kind: 'text' },
  { key: 'priceSuffix', label: 'Price suffix', kind: 'text' },
  { key: 'sortOrder', label: 'Sort order', kind: 'number' },
  {
    key: 'featured',
    label: 'Featured accommodation',
    kind: 'checkbox',
  },
]

const amenityFields: EditorField<DraftAmenity>[] = [
  { key: 'name', label: 'Name', kind: 'text' },
  { key: 'category', label: 'Category', kind: 'text' },
  { key: 'image', label: 'Image URL', kind: 'text', fullWidth: true },
  {
    key: 'description',
    label: 'Description',
    kind: 'textarea',
    fullWidth: true,
  },
  {
    key: 'layout',
    label: 'Layout',
    kind: 'select',
    options: [
      { label: 'Wide', value: 'wide' },
      { label: 'Wide Full', value: 'wide-full' },
      { label: 'Tall', value: 'tall' },
      { label: 'Standard', value: 'standard' },
    ],
  },
  { key: 'sortOrder', label: 'Sort order', kind: 'number' },
]

const activityFields: EditorField<DraftActivity>[] = [
  { key: 'name', label: 'Name', kind: 'text' },
  { key: 'category', label: 'Category', kind: 'text' },
  { key: 'duration', label: 'Duration', kind: 'text' },
  { key: 'image', label: 'Image URL', kind: 'text', fullWidth: true },
  {
    key: 'description',
    label: 'Description',
    kind: 'textarea',
    fullWidth: true,
  },
  { key: 'sortOrder', label: 'Sort order', kind: 'number' },
]

const weeklyActivityFields: EditorField<DraftWeeklyActivity>[] = [
  {
    key: 'day',
    label: 'Day',
    kind: 'select',
    options: weeklyActivityDays.map((day) => ({ label: day, value: day })),
  },
  { key: 'time', label: 'Time', kind: 'time' },
  { key: 'name', label: 'Name', kind: 'text' },
  {
    key: 'tone',
    label: 'Tone',
    kind: 'select',
    options: [
      { label: 'Blue', value: 'blue' },
      { label: 'Green', value: 'green' },
      { label: 'Sand', value: 'sand' },
      { label: 'Stone', value: 'stone' },
    ],
  },
]

const diningHighlightFields: EditorField<DraftDiningHighlight>[] = [
  { key: 'label', label: 'Label', kind: 'text' },
  { key: 'name', label: 'Name', kind: 'text' },
  {
    key: 'description',
    label: 'Description',
    kind: 'textarea',
    fullWidth: true,
  },
  { key: 'sortOrder', label: 'Sort order', kind: 'number' },
]

const menuItemFields: EditorField<DraftMenuItem>[] = [
  { key: 'name', label: 'Name', kind: 'text' },
  { key: 'price', label: 'Price', kind: 'number' },
  {
    key: 'category',
    label: 'Category',
    kind: 'select',
    options: [
      { label: 'Appetizers', value: 'appetizers' },
      { label: 'Mains', value: 'mains' },
      { label: 'Desserts', value: 'desserts' },
    ],
  },
  {
    key: 'description',
    label: 'Description',
    kind: 'textarea',
    fullWidth: true,
  },
  { key: 'sortOrder', label: 'Sort order', kind: 'number' },
]

function toDraftContent(initialContent: ContentAdminPageProps['initialContent']): AdminContentInput {
  return {
    accommodations: initialContent.accommodations.map((item) => ({
      name: item.name,
      description: item.description,
      image: item.image,
      size: item.size,
      tags: item.tags ?? [],
      guests: item.guests,
      area: item.area,
      beds: item.beds,
      price: item.price,
      priceSuffix: item.priceSuffix,
      featured: item.featured ?? false,
      sortOrder: item.sortOrder,
    })),
    amenities: initialContent.amenities.map((item) => ({
      name: item.name,
      description: item.description,
      category: item.category,
      image: item.image,
      layout: item.layout,
      sortOrder: item.sortOrder,
    })),
    activities: initialContent.activities.map((item) => ({
      name: item.name,
      description: item.description,
      category: item.category,
      duration: item.duration,
      image: item.image,
      sortOrder: item.sortOrder,
    })),
    weeklyActivities: initialContent.weeklyActivities.map((item) => ({
      day: item.day,
      time: item.time,
      name: item.name,
      tone: item.tone,
    })),
    diningHighlights: initialContent.diningHighlights.map((item) => ({
      name: item.name,
      description: item.description,
      label: item.label,
      sortOrder: item.sortOrder,
    })),
    menuItems: initialContent.menuItems.map((item) => ({
      name: item.name,
      price: item.price,
      description: item.description,
      category: item.category,
      sortOrder: item.sortOrder,
    })),
  }
}

export function ContentAdminPage({ initialContent }: ContentAdminPageProps) {
  const saveContent = useServerFn(saveAdminContent)
  const [draft, setDraft] = useState(() => toDraftContent(initialContent))
  const [message, setMessage] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  const saveChanges = () => {
    setMessage(null)

    startTransition(async () => {
      try {
        const nextContent = await saveContent({ data: draft })
        setDraft(toDraftContent(nextContent))
        setMessage('Content saved to MongoDB.')
      } catch (error) {
        setMessage(
          error instanceof Error ? error.message : 'Failed to save content.',
        )
      }
    })
  }

  const resetChanges = () => {
    setDraft(toDraftContent(initialContent))
    setMessage('Reverted to the last loaded content snapshot.')
  }

  return (
    <main className="min-h-screen bg-[#f3f0e8] text-[#1c211d]">
      <header className="border-b border-[#d9d4c9] bg-[#f7f4ec]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
          <div>
            <a
              className="text-[12px] tracking-[0.22em] text-[#07342f]"
              href="/"
            >
              LUMINA COAST
            </a>
            <h1 className="mt-2 font-serif text-[28px] text-[#1c211d]">
              Content Admin
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              className="inline-flex h-9 items-center rounded-lg border border-[#c8c2b7] px-4 text-[12px] text-[#24302a] transition-colors hover:border-[#07342f] hover:text-[#07342f]"
              href="/accommodations"
            >
              View site
            </a>
            <Button
              className="bg-[#07342f] text-white hover:bg-[#0d463e]"
              disabled={isPending}
              onClick={saveChanges}
              type="button"
            >
              <Save />
              {isPending ? 'Saving...' : 'Save all changes'}
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1400px] px-6 py-6 md:px-10">
        <div className="mb-6 flex flex-col gap-3 border border-[#d9d4c9] bg-[#fbf9f3] px-4 py-3 md:flex-row md:items-center md:justify-between">
          <p className="text-[13px] leading-6 text-[#545d56]">
            Edit the live MongoDB-backed content for accommodations, amenities,
            activities, and dining in one place.
          </p>
          <div className="flex items-center gap-3">
            <Button onClick={resetChanges} type="button" variant="outline">
              <RefreshCcw />
              Reset
            </Button>
          </div>
        </div>

        {message ? (
          <div className="mb-6 border border-[#d2ccbf] bg-[#f7f4ec] px-4 py-3 text-[13px] text-[#3f4b44]">
            {message}
          </div>
        ) : null}

        <Tabs className="gap-6" defaultValue="accommodations">
          <TabsList
            className="w-full justify-start overflow-x-auto border-b border-[#d9d4c9] px-0 pb-2"
            variant="line"
          >
            <TabsTrigger className="px-0 text-[13px]" value="accommodations">
              Accommodations
            </TabsTrigger>
            <TabsTrigger className="px-0 text-[13px]" value="amenities">
              Amenities
            </TabsTrigger>
            <TabsTrigger className="px-0 text-[13px]" value="activities">
              Activities
            </TabsTrigger>
            <TabsTrigger className="px-0 text-[13px]" value="weekly">
              Weekly rhythm
            </TabsTrigger>
            <TabsTrigger className="px-0 text-[13px]" value="dining">
              Dining
            </TabsTrigger>
            <TabsTrigger className="px-0 text-[13px]" value="menu">
              Menu
            </TabsTrigger>
          </TabsList>

          <TabsContent value="accommodations">
            <CollectionEditor
              addLabel="Add accommodation"
              createItem={(): DraftAccommodation => ({
                name: '',
                description: '',
                image: '',
                size: 'compact',
                tags: [],
                guests: '',
                area: '',
                beds: '',
                price: '',
                priceSuffix: '',
                featured: false,
                sortOrder: draft.accommodations.length + 1,
              })}
              description="Manage the room listing order, featured placement, and card content."
              fields={accommodationFields}
              items={draft.accommodations}
              onChange={(items) => setDraft((current) => ({ ...current, accommodations: items }))}
              title="Accommodations"
            />
          </TabsContent>

          <TabsContent value="amenities">
            <CollectionEditor
              addLabel="Add amenity"
              createItem={(): DraftAmenity => ({
                name: '',
                description: '',
                category: '',
                image: '',
                layout: 'standard',
                sortOrder: draft.amenities.length + 1,
              })}
              description="Update amenity cards and their masonry layout."
              fields={amenityFields}
              items={draft.amenities}
              onChange={(items) => setDraft((current) => ({ ...current, amenities: items }))}
              title="Amenities"
            />
          </TabsContent>

          <TabsContent value="activities">
            <CollectionEditor
              addLabel="Add activity"
              createItem={(): DraftActivity => ({
                name: '',
                description: '',
                category: '',
                duration: '',
                image: '',
                sortOrder: draft.activities.length + 1,
              })}
              description="Edit the main activity cards shown on the public page."
              fields={activityFields}
              items={draft.activities}
              onChange={(items) => setDraft((current) => ({ ...current, activities: items }))}
              title="Activities"
            />
          </TabsContent>

          <TabsContent value="weekly">
            <CollectionEditor
              addLabel="Add weekly activity"
              createItem={(): DraftWeeklyActivity => ({
                day: 'Mon',
                time: '07:00',
                name: '',
                tone: 'blue',
              })}
              description="Control the weekly rhythm schedule and color tone for each entry."
              fields={weeklyActivityFields}
              items={draft.weeklyActivities}
              onChange={(items) =>
                setDraft((current) => ({ ...current, weeklyActivities: items }))
              }
              title="Weekly rhythm"
            />
          </TabsContent>

          <TabsContent value="dining">
            <CollectionEditor
              addLabel="Add dining highlight"
              createItem={(): DraftDiningHighlight => ({
                label: '',
                name: '',
                description: '',
                sortOrder: draft.diningHighlights.length + 1,
              })}
              description="Edit the dining highlight strips shown on the dining landing page."
              fields={diningHighlightFields}
              items={draft.diningHighlights}
              onChange={(items) =>
                setDraft((current) => ({ ...current, diningHighlights: items }))
              }
              title="Dining highlights"
            />
          </TabsContent>

          <TabsContent value="menu">
            <CollectionEditor
              addLabel="Add menu item"
              createItem={(): DraftMenuItem => ({
                name: '',
                price: 0,
                description: '',
                category: 'appetizers',
                sortOrder: draft.menuItems.length + 1,
              })}
              description="Maintain the dining menu groups that appear on the menu page."
              fields={menuItemFields}
              items={draft.menuItems}
              onChange={(items) => setDraft((current) => ({ ...current, menuItems: items }))}
              title="Menu items"
            />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

function CollectionEditor<T extends Record<string, unknown>>({
  addLabel,
  createItem,
  description,
  fields,
  items,
  onChange,
  title,
}: {
  addLabel: string
  createItem: () => T
  description: string
  fields: EditorField<T>[]
  items: T[]
  onChange: (items: T[]) => void
  title: string
}) {
  const updateField = (
    index: number,
    field: EditorField<T>,
    value: string | number | boolean | string[],
  ) => {
    const nextItems = items.map((item, itemIndex) =>
      itemIndex === index ? { ...item, [field.key]: value } : item,
    )

    onChange(nextItems)
  }

  const removeItem = (index: number) => {
    onChange(items.filter((_, itemIndex) => itemIndex !== index))
  }

  const addItem = () => {
    onChange([...items, createItem()])
  }

  return (
    <section className="space-y-5">
      <div className="flex flex-col gap-3 border-b border-[#d9d4c9] pb-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-serif text-[24px] text-[#1c211d]">{title}</h2>
          <p className="mt-1 text-[13px] leading-6 text-[#5a635d]">
            {description}
          </p>
        </div>
        <Button onClick={addItem} type="button" variant="outline">
          <Plus />
          {addLabel}
        </Button>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <article
            className="border border-[#d9d4c9] bg-[#fbf9f3] p-4"
            key={`${title}-${index}`}
          >
            <div className="mb-4 flex items-center justify-between border-b border-[#e2ddd2] pb-3">
              <p className="text-[13px] font-medium text-[#2c332f]">
                {title.slice(0, -1)} {index + 1}
              </p>
              <Button onClick={() => removeItem(index)} size="sm" type="button" variant="ghost">
                <Trash2 />
                Remove
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {fields.map((field) => (
                <div
                  className={field.fullWidth ? 'md:col-span-2' : undefined}
                  key={field.key}
                >
                  <Label className="mb-2" htmlFor={`${title}-${field.key}-${index}`}>
                    {field.label}
                  </Label>
                  <FieldInput<T>
                    field={field}
                    id={`${title}-${field.key}-${index}`}
                    onChange={(value) => updateField(index, field, value)}
                    value={item[field.key]}
                  />
                </div>
              ))}
            </div>
          </article>
        ))}

        {items.length === 0 ? (
          <div className="border border-dashed border-[#d0cabc] bg-[#faf7ef] px-4 py-8 text-center text-[13px] text-[#5d655f]">
            No entries yet.
          </div>
        ) : null}
      </div>
    </section>
  )
}

function FieldInput<T extends Record<string, unknown>>({
  field,
  id,
  onChange,
  value,
}: {
  field: EditorField<T>
  id: string
  onChange: (value: string | number | boolean | string[]) => void
  value: unknown
}) {
  if (field.kind === 'textarea') {
    return (
      <Textarea
        id={id}
        onChange={(event) => onChange(event.target.value)}
        value={typeof value === 'string' ? value : ''}
      />
    )
  }

  if (field.kind === 'select') {
    return (
      <Select
        onValueChange={(nextValue) => onChange(nextValue)}
        value={typeof value === 'string' ? value : ''}
      >
        <SelectTrigger className="w-full bg-white" id={id}>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          {field.options?.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  }

  if (field.kind === 'checkbox') {
    return (
      <label
        className="flex h-10 items-center gap-3 border border-[#d5d0c4] bg-white px-3 text-[13px] text-[#2b302d]"
        htmlFor={id}
      >
        <input
          checked={Boolean(value)}
          className="size-4 accent-[#07342f]"
          id={id}
          onChange={(event) => onChange(event.target.checked)}
          type="checkbox"
        />
        Set as featured
      </label>
    )
  }

  if (field.kind === 'tags') {
    return (
      <Input
        id={id}
        onChange={(event) =>
          onChange(
            event.target.value
              .split(',')
              .map((tag) => tag.trim())
              .filter(Boolean),
          )
        }
        placeholder={field.placeholder}
        value={Array.isArray(value) ? value.join(', ') : ''}
      />
    )
  }

  if (field.kind === 'number') {
    return (
      <Input
        id={id}
        onChange={(event) => onChange(Number(event.target.value) || 0)}
        type="number"
        value={typeof value === 'number' ? value : 0}
      />
    )
  }

  if (field.kind === 'time') {
    return (
      <Input
        id={id}
        onChange={(event) => onChange(event.target.value)}
        type="time"
        value={typeof value === 'string' ? value : ''}
      />
    )
  }

  return (
    <Input
      id={id}
      onChange={(event) => onChange(event.target.value)}
      placeholder={field.placeholder}
      value={typeof value === 'string' ? value : ''}
    />
  )
}
