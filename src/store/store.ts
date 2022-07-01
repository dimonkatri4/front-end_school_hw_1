import {configureStore} from "@reduxjs/toolkit";
import trendingReducer from "./trendingSlice";
import usersReducer from "./usersSlice"


export const store = configureStore({
    reducer: {
        trending: trendingReducer,
        user: usersReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch