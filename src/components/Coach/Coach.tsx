import Calendar from '../Calendar/Calendar.tsx'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../utilities/context.tsx'
import { getCoachMeetings } from '../../utilities/api.tsx'


export default function Coach() {
  let contexted_coach: User = useContext(UserContext)
  
  const nullMeeting = {
    id: -1, 
    student: null, 
    coach: contexted_coach, 
    start_dtime: new Date(), 
    end_dtime: new Date(), 
    review: null 
  }

  let [coach, setCoach] = useState(contexted_coach)
  let [meetings, setMeetings] = useState([nullMeeting])

  useEffect(() => {
    if(meetings[0]["id"] == -1)
      getCoachMeetings(coach.id).then((meetings) => {
        if(meetings.length !== 0) 
          setMeetings(meetings)
      })
  }, [coach, meetings])

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Calendar 
        meetings={meetings}
      />
    </>
    
  )
}