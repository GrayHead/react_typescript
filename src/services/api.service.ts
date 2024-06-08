import axios from 'axios';
import {baseUrl, urls} from "../constants/urls";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {}
});


export const userService = {
    getAll: async (): Promise<IUser[]> => {
        const response = await axiosInstance.get<IUser[]>(urls.users.base);
        return response.data;
    }
}

export const postService = {
    getAll: async () => {
        let response = await axiosInstance.get<IPost[]>(urls.posts.base);
        return response.data;
    }
}


