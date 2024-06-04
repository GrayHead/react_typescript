import React, {useEffect} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import {useStore} from "./context/store";
import {userService} from "./services/api.service";


const App = () => {

    const {userStore} = useStore();
    useEffect(() => {
        userService.getUsers().then(value => userStore.loadUsers(value.data));
    }, []);

    return (
        <div>
            <HeaderComponent/>

            <Outlet/>


            <hr/>
            {userStore.favoriteUser && <div>{userStore.favoriteUser.email}</div>}
            <hr/>


        </div>
    );
};

export default App;
