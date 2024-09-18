import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./slices/newsSlices";


const store = configureStore({
    reducer: {
        news: newsSlice,
    }
})



export type RooteState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store