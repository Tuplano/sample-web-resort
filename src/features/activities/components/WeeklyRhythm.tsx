import type { WeeklyActivity } from '@/types/activities'
import { weeklyActivityDays } from '@/features/activities/activities.schemas'

const toneClassNames: Record<WeeklyActivity['tone'], string> = {
  blue: 'bg-[#e9f2f8] text-[#334d5b]',
  green: 'bg-[#e8f2ee] text-[#314b40]',
  sand: 'bg-[#f5eee4] text-[#5f4c35]',
  stone: 'bg-[#ece9e3] text-[#4d514c]',
}

function formatTime(time: string) {
  const [hours, minutes] = time.split(':').map(Number)

  if (!Number.isFinite(hours) || !Number.isFinite(minutes)) {
    return time
  }

  const suffix = hours >= 12 ? 'PM' : 'AM'
  const normalizedHours = hours % 12 || 12

  return `${String(normalizedHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${suffix}`
}

export function WeeklyRhythm({ activities }: { activities: WeeklyActivity[] }) {
  const activitiesByDay = weeklyActivityDays.map((day) => ({
    day,
    activities: activities.filter((activity) => activity.day === day),
  }))

  return (
    <div className="overflow-hidden rounded-[8px] border border-[#e5e1d9] bg-[#fffdf8]">
      <div className="grid min-w-[840px] grid-cols-7">
        {activitiesByDay.map(({ day, activities: dayActivities }) => (
          <div
            className="min-h-[210px] border-r border-[#ece8df] p-4 last:border-r-0"
            key={day}
          >
            <h3 className="text-center text-[10px] uppercase text-[#8a8f89]">
              {day}
            </h3>
            <div className="mt-7 space-y-3">
              {dayActivities.map((activity) => (
                <div
                  className={`rounded-[4px] p-3 ${toneClassNames[activity.tone]}`}
                  key={activity.id ?? `${activity.day}-${activity.time}-${activity.name}`}
                >
                  <p className="text-[9px] uppercase">{formatTime(activity.time)}</p>
                  <p className="mt-1 text-[12px]">{activity.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
