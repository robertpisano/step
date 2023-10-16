// import { useState } from 'react'

import Day from './Day/Day.tsx'

export default function Calendar({meetings}: {meetings: Meeting[]}) {
  // let coach = c

  const current_date = new Date()
  const day_of_week = current_date.getDay()
  const week_start_date = new Date(Date.now() - 24 * 3600 * 1000 * day_of_week)
  let day_of_week_date  = week_start_date

  return (
    <div className="grid grid-cols-8 grid-rows-24 h-20 w-1000">
      <Day
        is_label={true}
        date_of_day={day_of_week_date.getTime()}
        meetings={[]}
      />
      {
        [...Array(7).keys()].map((day: number) => { 
          var jsx = <Day
            is_label={false}
            date_of_day={day_of_week_date.getTime()}
            meetings={meetings}
            key={day}
          />

          day_of_week_date = new Date(day_of_week_date.getTime() + 24 * 3600 * 1000)

          return jsx
        })
      }
    </div>
  )
}