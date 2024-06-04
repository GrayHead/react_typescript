import React, {useEffect, useState} from 'react';
import './App.css';
import {IUserModel} from "./models/IUserModel";
import {IPostModel} from "./models/IPostModel";
import {Outlet} from "react-router-dom";
import HeaderComponent from "./component/HeaderComponent";
import {postService, userService} from "./services/api.service";
import {Context} from "./context/ContextProvider";


function App() {


    const [users, setUsers] = useState<IUserModel[]>([]);
    const [posts, setPosts] = useState<IPostModel[]>([]);
    const [favoriteUserState, setFavoriteUserState] = useState<IUserModel | null>(null);
    useEffect(() => {
        userService.getUsers().then(value => setUsers(value.data));
        postService.getPosts().then(value => setPosts(value.data));
    }, []);

    const lift = (obj: IUserModel) => {
        setFavoriteUserState(obj);
    }

    return (
        <div>

            <HeaderComponent/>


            <Context.Provider value={{
                userStore: {
                    allUsers: users,
                    set: (obj: IUserModel) => {
                        lift(obj);
                    },
                    favoriteUser: null


                },
                postStore: {
                    allPosts: posts,

                }
            }}>
                <Outlet/>
            </Context.Provider>

            <hr/>
            {
                favoriteUserState && <div>{favoriteUserState.username}</div>
            }
            <hr/>
        </div>
    );
}

export default App;
