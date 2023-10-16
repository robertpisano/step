// import { useState } from 'react'

import Interval from '../Interval/Interval.tsx'
import { useContext } from 'react'
import { UserContext } from '../../../utilities/context.tsx'

export default function Day({is_label, date_of_day, meetings}: {is_label: Boolean, date_of_day: number, meetings: Meeting[]}) {
  // let coach = user
  let coach = useContext(UserContext)

  function meeting_for_hour(date_time: Date, meetings: Meeting[]): Meeting {
    let noMeeting = {
        id: -1,
        student: null,
        coach: null,
        start_dtime: new Date(-1000),
        end_dtime: new Date(-1000),
        review: null
      }

    if(meetings.length == 0)
      return noMeeting

    return meetings.find((meeting: Meeting) => {
      return meeting.start_dtime.getTime() == date_time.getTime() || 
        ( date_time.getTime() > meeting.start_dtime.getTime() && date_time.getTime() < meeting.end_dtime.getTime())
    }) || noMeeting
  }

  return (
    <>
      <div>
        { 
          is_label ?
            <h1>Date</h1> : 
            <h1>{}</h1>
        }
        {
          [...Array(24).keys()].filter((hour) =>  hour % 2 == 0).map((hour: number) => { 
            let military_hour = hour
            let hour_time = new Date(date_of_day)

            hour_time.setHours(military_hour)

            hour_time.setMinutes(0)
            hour_time.setSeconds(0)
            hour_time.setMilliseconds(0)

            let meeting = meeting_for_hour(hour_time, meetings) 

            return (
              <Interval
                is_label={is_label}
                date_time={hour_time}
                meeting={meeting}
                key={hour_time.toString()}
              />
            )
          }) 
        }
      </div>
    </>
  )
}