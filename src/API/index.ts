import axios from "axios";


const key = 'df8857e008b74a50926daa0a904badb5'
const instance = axios.create({
    baseURL: 'https://newsapi.org/v2/'
})
export const newsAPI = {
    getAllNewToday() {
        return instance.get(`top-headlines?country=us&category=business&apiKey=${key}`)
    },
    searchNews(query: string, sortBy?: string) {
        const baseURL = `everything?q=${query}&apiKey=${key}`;
        const sortParam = sortBy ? `&sortBy=${sortBy}` : ''; // Добавляем параметр только если он существует
        return instance.get(baseURL + sortParam);
    }
}



