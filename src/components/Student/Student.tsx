import { useEffect, useState } from 'react'
import { getAllCoaches, getCoachMeetings } from '../../utilities/api.tsx'
import Calendar from '../Calendar/Calendar.tsx'

export default function Student() {
  const nullMeeting = {
    id: -1, 
    student: null, 
    coach: null, 
    start_dtime: new Date(), 
    end_dtime: new Date(), 
    review: null 
  }

  let [coaches, setCoaches] = useState([{}])
  let [coach, setCoach] = useState({})
  let [meetings, setMeetings] = useState([nullMeeting])


  useEffect(() => {
    if(Object.keys(coach).length  == 0)
      getAllCoaches().then((response) => {
        console.log("wtf", coach, response)
        if(response.length !== 0) {
          setCoach(response[0])
          setCoaches(response)
        }
      })

    if(Object.keys(coach).length !== 0 && (meetings.length == 0 || meetings[0].id == -1)) {
      getCoachMeetings(coach.id).then((meetings) => {
        setMeetings(meetings)
      })
    }

  }, [coach, meetings])

  function updateCalendar(coach: User) {
    setCoach(coach) 
    setMeetings([nullMeeting])
  }

  return (
    <>
      { 
        coaches.length !== 0 && 
          coaches.map((thisCoach) => {
            return <span key={thisCoach.id} className={`m-2 ${thisCoach.id == coach.id ? "underline" : ""}`} onClick={(e) => updateCalendar(thisCoach)}>{thisCoach.name}</span>
          })
      }
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Calendar 
        meetings={meetings}
      />
    </>
    
  )
}