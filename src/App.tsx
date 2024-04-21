import React, {FC} from 'react';
import './App.css';
import {useFetch} from "./hooks/CustomHooks";
import {IUser} from "./models/IUser";


const App: FC = () => {

    const users = useFetch<IUser[]>('/users', []);


    return (
        <>
            {
                users.map((user) => (<div>{user.name}</div>))
            }
        </>

    );
}

export default App;
