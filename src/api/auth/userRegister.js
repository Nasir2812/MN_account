import baseURL from '../../utils/baseUrl'

export const registerUser = async(registerData) => {
    const response =  await  baseURL.post('/register',registerData)
    return response.data
}