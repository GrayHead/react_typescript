import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {createContext, useContext} from "react";

type StoreType = {
    userStore: {
        allUsers: IUserModel[],
        set: (obj: IUserModel) => void,
        favoriteUser: IUserModel | null;
    },
    postStore: {
        allPosts: IPostModel[],

    },


}


export let defaultValue = {
    userStore: {
        allUsers: [],
        set: (obj: IUserModel) => {
        },
        favoriteUser: null

    },
    postStore: {
        allPosts: [],

    }
};
export let Context = createContext<StoreType>(defaultValue);

export const useContextProvider = (): StoreType => useContext(Context);
