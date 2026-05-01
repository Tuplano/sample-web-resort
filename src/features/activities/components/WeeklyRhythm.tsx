import type { WeeklyActivity } from '@/types/activities'

const toneClassNames: Record<WeeklyActivity['tone'], string> = {
  blue: 'bg-[#e9f2f8] text-[#334d5b]',
  green: 'bg-[#e8f2ee] text-[#314b40]',
  sand: 'bg-[#f5eee4] text-[#5f4c35]',
  stone: 'bg-[#ece9e3] text-[#4d514c]',
}

export function WeeklyRhythm({ activities }: { activities: WeeklyActivity[] }) {
  return (
    <div className="overflow-hidden rounded-[8px] border border-[#e5e1d9] bg-[#fffdf8]">
      <div className="grid min-w-[840px] grid-cols-7">
        {activities.map((activity) => (
          <div className="min-h-[210px] border-r border-[#ece8df] p-4 last:border-r-0" key={activity.day}>
            <h3 className="text-center text-[10px] uppercase text-[#8a8f89]">
              {activity.day}
            </h3>
            <div className={`mt-7 rounded-[4px] p-3 ${toneClassNames[activity.tone]}`}>
              <p className="text-[9px] uppercase">{activity.time}</p>
              <p className="mt-1 text-[12px]">{activity.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
