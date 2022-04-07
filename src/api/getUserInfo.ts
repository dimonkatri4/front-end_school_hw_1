import apiRequest from './api';
import {UserInfoType} from "../domain/UserInfoType";

const getUserInfo = async (id = 'dave.xp'): Promise<UserInfoType | string> => {
    const urlParameter = 'user/info/';
    const userInfo = await apiRequest(urlParameter, id);
    return userInfo;
};

export default getUserInfo;
