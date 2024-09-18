import axios from "axios";


const key = 'df8857e008b74a50926daa0a904badb5'
const instance = axios.create({
    baseURL: 'https://newsapi.org/v2/'
})
export const newsAPI = {
    getAllNewToday() {
        return instance.get(`top-headlines?country=us&category=business&apiKey=${key}`)
    },
    getNewsByPudDate(pub: string) {
        return instance.get(`everything?q=${pub}&apiKey=${key}`)
    }
}



