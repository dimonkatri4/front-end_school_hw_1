import apiRequest from './api';

const getUserInfo = async (id = 'dave.xp') => {
    const urlParameter = 'user/info/';
    const userInfo = await apiRequest(urlParameter, id);
    return userInfo;
};

export default getUserInfo;
