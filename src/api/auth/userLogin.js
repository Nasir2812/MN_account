import baseURL from "../../utils/baseUrl";

 const loginUser = async(loginuser) => {
    return await baseURL.post('/login',loginuser)
}
export default loginUser
