import apiRequest from './api';

const getUserFeed = async (id = 'dave.xp') => {
    const urlParameter = 'user/info/';
    const userFeed = await apiRequest(urlParameter, id);
    return userFeed;
};

export default getUserFeed;
