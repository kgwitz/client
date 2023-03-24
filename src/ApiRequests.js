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


export {
    GetMatchups
}