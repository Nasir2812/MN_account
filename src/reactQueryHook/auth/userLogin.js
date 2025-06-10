import { useMutation } from "react-query";
import loginUser from '../../api/auth/userLogin'

 export default function useLoginUser() {
  return useMutation(loginUser);
}