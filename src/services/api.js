import axios from "axios"

export const api = axios.create({
    baseURL: 'https://foodexplorer-api182.herokuapp.com'
})