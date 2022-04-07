import apiRequest from './api';
import {PostType} from "../domain/PostType";

const getUserFeed = async (id = 'dave.xp'): Promise<PostType[]> => {
    const urlParameter = 'user/info/';
    const userFeed = await apiRequest(urlParameter, id);
    return userFeed;
};

export default getUserFeed;
