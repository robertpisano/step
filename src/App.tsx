// import { useState, useContext } from 'react'

import viteLogo from '/vite.svg'

import './App.css'
import Coach from './components/Coach/Coach.tsx'
import Student from './components/Student/Student.tsx'
import { useEffect, useState } from 'react'
import { getCoach, getStudent } from './utilities/api.tsx'
import { UserContext } from './utilities/context.tsx'

const emptyUser = {
  id: -1,
  username: "",
  name: "",
  user_role: "Coach"
}

function App() {
  // let user_data = { username: "hunterHunter", password: "buddyholly" }
  let [user, setUser] = useState(emptyUser)

  useEffect(() => {
    let route = window.location.pathname

    if(route == '/student' && user.id === -1) {
      const student_id = 1
      getStudent(student_id).then((user)=>{
        setUser(user)
      })
    }
    
    if (route == '/coach' && user.id === -1) {
      const coach_id = 5
      getCoach(coach_id).then((user)=>{
        setUser(user)
      })
    }
  }, [user])

  if(user.id == -1 )
    return <h1>Loading...</h1>
  else
    return (
      <UserContext.Provider value={user}>
        {
          user.user_role == "Coach" ?
            <Coach
            /> :
            <Student></Student>
        }
      </UserContext.Provider>
    )
}

export default App
