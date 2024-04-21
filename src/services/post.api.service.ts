import axios, {AxiosResponse} from "axios";
import {IPost} from "../model/IPost";


const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {'Content-Type': 'application/json'}
});

const getPosts = (): Promise<AxiosResponse<IPost[]>> => {
    return axiosInstance.get('/posts');
}

const getPostsOfUser = (userId: number): Promise<AxiosResponse<IPost[]>> => {
    return axiosInstance.get('/posts?userId=' + userId);
}

const getPost = async (id: number): Promise<AxiosResponse<IPost>> => {
    return await axiosInstance.get('/post/' + id);
}
export {
    getPost,
    getPosts,
    getPostsOfUser
}
