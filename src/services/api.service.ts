import axios from 'axios';
import {baseUrl, urls} from "../constants/urls";
import {ICharactersResponse} from "../models/ICharactersResponse";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {}
});

const characterService = {
    getAll: async (page: string) => {

        const axiosResponse
            //https://rickandmortyapi.com/api/character?page=1
            = await axiosInstance.get<ICharactersResponse>(urls.character.all, {
            params: {
                page: page
            }
        });
        return axiosResponse
    }
}

export {
    characterService
}
