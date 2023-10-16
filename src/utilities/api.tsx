function getHost(): string {
  return "http://127.0.0.1:3000"
}

let getStudent = async function(id: number): Promise<User> {
  const host = getHost()
  const route = `/student/${id}`
  const url = host + route

  const response = await fetch(url, { mode: "cors" })
  let data = await response.json()
 
  return {
    id: data["id"],
    username: data["username"],
    name: data["name"],
    user_role: "Student"
  }
}

let getCoach = async function(id: number): Promise<User> {
  const host = getHost()
  const route = `/coach/${id}`
  const url = host + route

  const response = await fetch(url, { mode: 'cors' })
  const data = await response.json()

  return {
    id: data["id"],
    username: data["username"],
    name: data["name"],
    user_role: "Coach"
  }
}

let getAllCoaches = async function(): Promise<User[]> {
  const host = getHost()
  const route = `/coach/index`
  const url = host + route

  const response = await fetch(url, { mode: 'cors' })
  let data = await response.json()

  let user_array = data.map((coach: any) => { 
    return {
      id: coach["id"],
      username: coach["username"],
      name: coach["name"],
      user_role: "Coach"
    }
  })

  return user_array
}

let getCoachMeetings = async function(user_id: number): Promise<Meeting[]> {
  const host = getHost()
  const route = `/meetings/${user_id}`
  const url = host + route

  const response = await fetch(url, { mode: 'cors' })
  let data = await response.json()

  if(data == null)
      return []

  let meeting_array = data.map((meeting: any) => { 
    return {
      id: meeting["id"],
      student: {
        id: meeting["student"] === null ? -1 : meeting["student"]["id"],
        username: meeting["student"] === null ? "" : meeting["student"]["username"],
        name: meeting["student"] === null ? "" : meeting["student"]["name"],
        user_role: "Student"
      },
      coach: {
        id: meeting["coach"]["id"],
        username: meeting["coach"]["username"],
        name: meeting["coach"]["name"],
        user_role: "Coach"
      },
      start_dtime: new Date(Date.parse(meeting["start_datetime"])),
      end_dtime: new Date(Date.parse(meeting["end_datetime"])),
      review: meeting["review"]
    }
  })

  return meeting_array
}

let getReview = async function(id: number): Promise<Review> {
  const host = getHost()
  const route = `/review/${id}`
  const url = host + route

  const response = await fetch(url, { mode: 'cors' })
  let data = await response.json()
 
  return {
    score: data["score"],
    notes: data["notes"]
  }
}


let postReview = async function(meeting_id: number, score: number, notes: string): Promise<Boolean> {
  const host = getHost()
  const route = `/review`
  const url = host + route

  const data = {
    meeting_id: meeting_id,
    score: score,
    notes: notes
  }

  const response = await fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
}

let postOpenMeeting = async function(start_date: Date, coach_id: number): Promise<Boolean> {
  const host = getHost()
  const route = `/meetings`
  const url = host + route

  const data = {
    coach_id: coach_id,
    start_datetime: start_date
  }

  const response = await fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.status == 200
}

let postBookMeeMeeting = async function(meeting_id: number, student_id: number): Promise<Boolean> {
  const host = getHost()
  const route = `/meetings/${meeting_id}`
  const url = host + route

  const data = {
    student_id: student_id
  }

  const response = await fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return true
}

export {
  getStudent,
  getCoach,
  getAllCoaches,
  getCoachMeetings,
  getReview,
  postOpenMeeting,
  postReview,
  postBookMeeMeeting
}