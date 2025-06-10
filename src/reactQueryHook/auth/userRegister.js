import { useMutation } from "react-query" 
import { registerUser } from "../../api/auth/userRegister"

export default function userRegister()  {
   return  useMutation(registerUser)
}