import { createContext } from "react"
const emptyUser = {
  id: 0,
  username: "",
  name: "",
  user_role: "Coach"
}

export const UserContext = createContext(emptyUser)