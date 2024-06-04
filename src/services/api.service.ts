import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});

const userService = {
    getUsers: async () => {
        return await axiosInstance.get('/users')
    },
    getSingleUser: async (id: number) => await axiosInstance.get('/users/' + id)
}

const postService = {
    getPosts: async () => {
        return await axiosInstance.get('/posts')
    },
    getSinglePOst: async (id: number) => await axiosInstance.get('/posts/' + id)
}

export {
    userService,
    postService
}


