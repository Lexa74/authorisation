import axios from 'axios'

const URL = 'http://127.0.0.1:8000/api'

export const postUser = (body) => {
    axios.post(`${URL}/register`, body)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

export const postLogin = (body) => {
    return axios.post(`${URL}/login`, body)
        .then((res) => {
            console.log(res.data)
            localStorage.setItem('token', res.data.authorization.token);
            return res
        })
}

export const postLogout = () => {
    const header = localStorage.getItem('token');
    axios.post(`${URL}/logout`, null, {headers: {Authorization: `Bearer ${header}`}})
        .then(res => console.log(res))
        .catch(err => console.log(err))
}