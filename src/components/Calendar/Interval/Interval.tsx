import { useContext, useEffect, useState } from 'react'
import { getReview, postOpenMeeting, postReview, postBookMeeMeeting } from '../../../utilities/api.tsx'
import { UserContext } from '../../../utilities/context.tsx'

export default function Interval(
  {is_label, date_time, meeting}: {is_label: Boolean, date_time: Date, meeting : Meeting}
) {
  const [meeting_state, setMeeting] = useState(meeting)
  const [showCreateReview, setShowCreateReview] = useState(false)
  const [reviewNotes, setReviewNotes] = useState("")
  const [reviewScore, setReviewScore] = useState(0)

  let user = useContext(UserContext)

  function handleClick() {
    console.log(user.user_role == "Student" && meeting_state.id !== -1 && meeting_state.student.id == -1)
    if(user.user_role == "Coach" && meeting_state.id === -1)
      // using a null meeting state, have to post an open meeting
      postOpenMeeting(date_time, user.id).then((response) => {  
        setMeeting({
          id: 0,
          student: {
            id: -1,
            username: "",
            name: "",
            user_role: "Student"
          },
          coach: user,
          start_dtime: date_time,
          end_dtime: new Date(date_time.getTime() + 2 * 3600),
          review: null
        })
      })
    else if (user.user_role == "Coach" && meeting_state.review !== null)
      // there's a review for this meeting, we can view the notes
      getReview(meeting_state.review as number)
        .then((review: Review) => alert(
          `score: ${review.score} \n notes: ${review.notes}`
        )
      )
    else if (user.user_role == "Coach" && meeting_state.review == null && meeting_state.student !== null && meeting_state.student.name !== "")
      // there's not a review for this meeting, check if it's past and record a review if it's past
      if(meeting_state.end_dtime.getTime() < new Date().getTime())
        setShowCreateReview(true)
        
        
    if (user.user_role == "Student" && meeting_state.id !== -1 && meeting_state.student.id == -1) {
      // we're not using a a fake meeting, but the student is faked, it can be booked
      postBookMeeMeeting(meeting_state.id, user.id).then((response)=>{
        alert("meeting booked! refresh page")
      })
    }
  }

  function handSubmitReview() {
    postReview(meeting_state.id, reviewScore, reviewNotes)
    setShowCreateReview(false)
  }

  function get_color(meeting: Meeting): string {
    if(meeting_state.id == -1) // if there is nothing at all, that time slot is free
      return "white" 
    else if(meeting_state.id == null) // if there no meeting_state id, then they are attempting to book the meeting_state 
      return "blue-300"
    else if(meeting_state.student == null ) // if there is no student, then the timeslot is free
      return "purple-200"
    else
      return "red-600"   
  }

  function get_rounded_corners(date_time: Date, meeting: Meeting): string {
    if(meeting_state !== null && date_time.getTime() == meeting_state.start_dtime.getTime())
      return "rounded-t-lg"
    else if (meeting_state !== null && 
      (date_time.getTime() < meeting_state.end_dtime.getTime() && date_time.getTime() > meeting_state.start_dtime.getTime())
    )
      return "rounded-b-lg"
    else 
      return ""
  }

  useEffect(()=> {
    setMeeting(meeting)
  }, [meeting])

  let hour: number = (date_time.getHours() + 24) % 12 || 12;

  let hour_color = get_color(meeting_state)
  let border_radius = get_rounded_corners(date_time, meeting_state)

  return (
    <> 
      { 
        showCreateReview &&
         <>
            <div className="absolute bg-white w-8/12 h-3/4 left-4 top-4 border-2 border-black">
              <h1>score</h1>
              <input className="border-2 border-black" name="score" type="number" onChange={(e) => setReviewScore(parseInt(e.target.value))}></input>
              <h1>notes</h1>
              <input className="border-2 border-black" name="notes" type="text" onChange={(e) => setReviewNotes(e.target.value)}></input>
              <button className="border-2 border-black" onClick={handSubmitReview}>Submit</button>
            </div>
          </>
      } 
      <div 
        className={`bg-${hour_color} ${border_radius} h-20` }
        onClick={handleClick}
      >
        {
          is_label ? 
            hour :
            meeting_state.id === -1 || meeting_state.student === null ?
              <><br/>Free</>:
              <h2>name: {meeting_state.student.name}</h2>
        }
      </div>
    </>
  )
}