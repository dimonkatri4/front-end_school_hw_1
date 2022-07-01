import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PostType} from "../domain/PostType";
import {ErrorType} from "../domain/ErrorType";

interface InitialStateType {
    trendingFeed: Array<PostType> | null
    errors: ErrorType
}

const initialState: InitialStateType = {
    trendingFeed: null,
    errors: null
}

export const trendingSlice = createSlice({
    name: 'trending',
    initialState,
    reducers: {
        setTrendingFeed: (state, action: PayloadAction<PostType[]>) => {
            state.trendingFeed = action.payload
        },
        setError: (state, action: PayloadAction<ErrorType>) => {
            state.errors = action.payload
        }
    }
})

export const {setTrendingFeed, setError} = trendingSlice.actions

export default trendingSlice.reducer