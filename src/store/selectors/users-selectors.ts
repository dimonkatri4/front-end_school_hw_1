import {RootState} from "../store";

export const getUsersSelector = (state:RootState) => state.user
export const getPageSizeSelector = (state:RootState) => state.user.pageSize