import type { DiningHighlight, MenuItem } from '@/types/dining'

export const diningHighlightsSeed: DiningHighlight[] = [
  {
    label: 'Raw Bar',
    name: 'Ocean Harvest',
    description:
      'Daily shellfish, reef fish crudo, and chilled coastal plates prepared with citrus, herbs, and mineral sea salts.',
    sortOrder: 1,
  },
  {
    label: 'Cellar',
    name: 'Sommelier Pairings',
    description:
      'Old-world wines, island infusions, and zero-proof pairings selected to follow each course with restraint.',
    sortOrder: 2,
  },
]

export const diningMenuSeed: MenuItem[] = [
  {
    name: 'Citrus Cured Scallops',
    price: 24,
    description:
      'Thinly sliced sea scallops, yuzu pearls, micro cilantro, jalapeno oil, and a dusting of sea salt.',
    category: 'appetizers',
    sortOrder: 1,
  },
  {
    name: 'Heirloom Tomato Tartare',
    price: 19,
    description:
      'Balsamic caviar, whipped burrata, basil emulsion, served with toasted sourdough crisps.',
    category: 'appetizers',
    sortOrder: 2,
  },
  {
    name: 'Wood-Fired Octopus',
    price: 28,
    description:
      'Charred Spanish octopus, romesco sauce, fingerling potatoes, and smoked paprika dust.',
    category: 'appetizers',
    sortOrder: 3,
  },
  {
    name: 'Lobster & Truffle Risotto',
    price: 64,
    description:
      'Butter-poached Maine lobster tail, carnaroli rice, shaved black winter truffle, and aged parmigiano-reggiano.',
    category: 'mains',
    sortOrder: 1,
  },
  {
    name: 'Aged Wagyu Striploin',
    price: 85,
    description:
      'A4 Japanese Wagyu, confit garlic, wild mushrooms, pommes puree, and a rich bordelaise reduction.',
    category: 'mains',
    sortOrder: 2,
  },
  {
    name: 'Herb-Crusted Rack of Lamb',
    price: 58,
    description:
      'Colorado lamb, pistachio-mint crust, charred baby carrots, and a blackberry demi-glace.',
    category: 'mains',
    sortOrder: 3,
  },
  {
    name: 'Valrhona Chocolate Sphere',
    price: 18,
    description:
      'Dark chocolate shell, hazelnut praline mousse, passionfruit curd, served with warm salted caramel poured tableside.',
    category: 'desserts',
    sortOrder: 1,
  },
  {
    name: 'Coconut Panna Cotta',
    price: 15,
    description:
      'Silky coconut cream, compressed mango, toasted macadamia nuts, and a kaffir lime syrup.',
    category: 'desserts',
    sortOrder: 2,
  },
]
