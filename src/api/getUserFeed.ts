import apiRequest from './api';
import { PostType } from '../domain/PostType';

const getUserFeed = async (id = 'dave.xp') => {
    const urlParameter = 'user/info/';
    const userFeed = await apiRequest<PostType[]>(urlParameter, id);
    return userFeed;
};

export default getUserFeed;
