import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:3000/api'
})

// request.interceptors.response.use((res) => res.data)

export default request;