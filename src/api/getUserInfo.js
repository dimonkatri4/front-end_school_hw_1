import apiRequest from "./api";

const getUserInfo = async (id='dave.xp') => {
    const urlParameter = 'user/info/' ;
    return await apiRequest(urlParameter,id);
}

export default getUserInfo;


