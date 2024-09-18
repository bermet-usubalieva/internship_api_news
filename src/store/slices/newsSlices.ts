import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { newsAPI } from "../../API"


export type News = {
    publishedAt: string,
    author: string,
    content: string,
    urlToImage: string,
    title: string
}

type NewsState = {
    news: News[],
    loading: boolean,
}

const initialState: NewsState = {
    news: [],
    loading: false,
}

export const getNewsInUS = createAsyncThunk<News[], void, { rejectValue: string }>(
    'news/getNewsInUS',
    async (_, { rejectWithValue }) => {
        const res = await newsAPI.getAllNewToday()
        console.log(res)

        if (res.status !== 200) {
            return rejectWithValue('Server Error')
        }

        return res.data.articles

    }
)


const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(getNewsInUS.pending, (state) => {
            state.loading = true
        })
        addCase(getNewsInUS.fulfilled, (state, action) => {
            state.loading = false
            state.news = action.payload
        })
    }
})

export default newsSlice.reducer

