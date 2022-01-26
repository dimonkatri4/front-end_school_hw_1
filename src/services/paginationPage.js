export const getPortionPage = (postArray, pageSize) => {
    const subarray = [];
    for (let i = 0; i < Math.ceil(postArray.length / pageSize); i += 1) {
        subarray[i] = postArray.slice(i * pageSize, i * pageSize + pageSize);
    }
    return subarray;
};

export const getPageCount = (postArray, pageSize) => Math.ceil(postArray.length / pageSize);
