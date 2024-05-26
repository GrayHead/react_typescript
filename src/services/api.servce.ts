import axios, {AxiosError} from "axios";
import {AuthDataModel} from "../models/AuthDataModel";
import {ITokenObtainPair} from "../models/ITokenObtainPair";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {retriveLocalStorageData} from "../helpers/helpers";

let axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
    headers: {}
});

axiosInstance.interceptors.request.use((request) => {


    if (localStorage.getItem('tokenPair') && request.url !== '/auth/refresh')
        request.headers.set('Authorization', 'Bearer ' + retriveLocalStorageData<ITokenObtainPair>('tokenPair').access);

    return request;

})

const authService = {
    authentication: async (authData: AuthDataModel): Promise<boolean> => {

        let response;
        try {
            response = await axiosInstance.post<ITokenObtainPair>('/auth', authData);
            localStorage.setItem('tokenPair', JSON.stringify(response.data));
        } catch (e) {
            console.log(e);
        }

        return !!(response?.data?.access && response.data?.refresh);


    },
    refresh: async (refreshToken: string) => {
        const response = await axiosInstance.post<ITokenObtainPair>('/auth/refresh', {refresh: refreshToken});
        localStorage.setItem('tokenPair', JSON.stringify(response.data));

    }
}


const carService = {
    getCars: async (page: string): Promise<ICarPaginatedModel | null> => {
        try {
            const response = await axiosInstance.get<ICarPaginatedModel>('/cars', {params: {page: page}});
            return response.data;

        } catch (e) {
            let axiosError = e as AxiosError;
            console.log(axiosError);
            if (axiosError?.response?.status === 401) {
                const refreshToken = retriveLocalStorageData<ITokenObtainPair>('tokenPair').refresh;
                await authService.refresh(refreshToken);
                return await carService.getCars(page);
            }
        }

        return null;
    }
}

export {
    authService,
    carService
}
