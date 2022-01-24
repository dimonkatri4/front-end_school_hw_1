import apiRequest from "./api";

const getUserInfo = (id='dave.xp') => {
    const urlParameter = 'user/info/' ;
    return apiRequest(urlParameter,id)
}

export default getUserInfo;


