import apiRequest from './api';
import {UserInfoType} from "../domain/UserInfoType";

type GetUserInfo = UserInfoType | string;

const getUserInfo = async (id = 'dave.xp') => {
    const urlParameter = 'user/info/';
    const userInfo = await apiRequest<GetUserInfo>(urlParameter, id);
    return userInfo;
};

export default getUserInfo;
