import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {createContext, useContext} from "react";

type StoreType = {
    userStore: {
        allUsers: IUserModel[]
    },
    postStore: {
        allPosts: IPostModel[]
    }
}

const defaultValue: StoreType = {
    userStore: {
        allUsers: []
    },
    postStore: {
        allPosts: []
    }
};
export const MyContext = createContext<StoreType>(defaultValue);

export const useContextProvider = (): StoreType => useContext(MyContext);
