import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserInfoType} from "../domain/UserInfoType";
import {ErrorType} from "../domain/ErrorType";

interface InitialStateType {
    userInfo: UserInfoType | null
    isFetching: boolean
    requestError: ErrorType | null
    pageSize: number
}

const initialState: InitialStateType = {
    userInfo: null as UserInfoType | null,
    isFetching: false,
    requestError: null as ErrorType | null,
    pageSize: 6,
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsersInfo: (state, action: PayloadAction<UserInfoType>) => {
            state.userInfo = action.payload
        },
        toggleIsFetching: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        setRequestError: (state, action: PayloadAction<ErrorType>) => {
            state.requestError = action.payload
        }
    }
})

export const {setUsersInfo, toggleIsFetching, setRequestError} = usersSlice.actions

export default usersSlice.reducer