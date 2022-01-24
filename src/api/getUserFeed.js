import apiRequest from "./api";

export const getUserFeed = (id='dave.xp') => {
    const urlParameter = 'user/info/' ;
    return apiRequest(urlParameter,id)
}

export default getUserFeed;


