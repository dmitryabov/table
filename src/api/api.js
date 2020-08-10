import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: `http://www.filltext.com/?`,
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 50) {
        return instance.get(`http://www.filltext.com/?rows=${pageSize}&id={number|${currentPage}}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}`).then( response => {return response.data})
     }
}