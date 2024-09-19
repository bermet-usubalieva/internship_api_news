import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { newsAPI } from "../../API"


export type News = {
    publishedAt: string,
    author: string,
    content: string,
    urlToImage: string,
    title: string,
    description: string,
    url: string
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

        if (res.status !== 200) {
            return rejectWithValue('Server Error')
        }

        return res.data.articles

    }
)
export const searchNews = createAsyncThunk<News[], { query: string, sortBy?: string }, { rejectValue: string }>(
    'news/searchNews',
    async ({ query, sortBy }, { rejectWithValue }) => {
        const res = await newsAPI.searchNews(query, sortBy);

        if (res.status !== 200) {
            return rejectWithValue('Server Error');
        }

        return res.data.articles;
    }
);


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
        //////////////////////////////////
        addCase(searchNews.pending, (state) => {
            state.loading = true;
        });
        addCase(searchNews.fulfilled, (state, action) => {
            state.loading = false;
            state.news = action.payload;
        });
        addCase(searchNews.rejected, (state, action) => {
            state.loading = false;
            console.error(action.payload);
        });
    }
})

export default newsSlice.reducer

