import axios from "axios"
import { getCookie } from "cookies-next";


let Tokn = getCookie(process.env.NEXT_PUBLIC_LOGIN_TOKEN_COOKIE_NAME as string)
// let Tokn = getCookie("LgTkn")
//const Bearer = 'Bearer ' + Tokn

// const API_URL = "http://localhost:8000"
//
const API_URL = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    // baseURL: "http://localhost:8000",
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiZXhwIjoxNjc5MzM3Njk5LCJpZCI6IjIzIiwibmFtZSI6IkpvaG4gRG9lIiwic3ViIjoieWFob28ifQ.XED-HPtLdYS7Rj37omudF_kYAoFDsiNW2UaY-631MxY',                  
        'Authorization':   'Bearer '+Tokn,                         
    
    },
    withCredentials:true,
})
export default API_URL;