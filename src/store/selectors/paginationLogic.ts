import { PostType } from '../../domain/PostType';

export const getPortionPage = (postArray: PostType[], pageSize: number) => {
    const subarray = [];
    for (let i = 0; i < Math.ceil(postArray.length / pageSize); i += 1) {
        subarray[i] = postArray.slice(i * pageSize, i * pageSize + pageSize);
    }
    return subarray;
};

export const getPageCount = (postArray: PostType[], pageSize: number) =>
    Math.ceil(postArray.length / pageSize);
