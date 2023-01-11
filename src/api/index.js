import axios from 'axios';

 const baseUrl = (headers) => axios.create({
    baseURL: "https://vue-node-test.onrender.com/api",
    headers: { ...headers }
})

export default baseUrl