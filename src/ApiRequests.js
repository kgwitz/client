import Axios from 'axios'

const URL = 'http://localhost:3001'

//Matchups
const GetMatchups = async () => {
    const res = await Axios.get(`${URL}/Matchup`)

    if (res) {
        return res
    }
}


//User
const Login = async (userName, password) => {
    const data = {
        userName: userName,
        password: password
    }

    console.log('data', data)
    const res = await Axios.post(`${URL}/Login`, data)

    if (res) {
        return res
    } else {
        console.log('no response')
    }
}

const CreateUser = async (data) => {
    console.log('data', data)
    const res = await Axios.post(`${URL}/CreateUser`, data)

    if (res) {
        return res
    } else {
        console.log('could not create user')
    }
}

const GetUser = async (id) => {
    console.log('getting users')
} 

export {
    GetMatchups,
    Login,
    GetUser,
    CreateUser,
}