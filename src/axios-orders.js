import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://react-my-burger-2f06f.firebaseio.com/'
})

export default instance