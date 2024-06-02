import React, {FC, useEffect} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import {postService, userService} from "./services/api.service";

const App: FC = () => {
    useEffect(() => {
        userService.getUsers().then(value => console.log(value.data));
        postService.getPosts().then(value => console.log(value.data));
    }, []);
    return (
        <>
            <HeaderComponent/>
            <Outlet/>

        </>

    );
}

export default App;
