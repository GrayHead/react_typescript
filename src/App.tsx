import React, {FC, useEffect, useState} from 'react';
import './App.css';
import IUser from "./model/IUser";
import UserComponent from "./components/user/UserComponent";


const App: FC = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });

        return () => {
            console.log('end');
        }
    }, []);


    return (
        <>
            {
                users
                    .map(({username, name, id, email}, index) =>
                        <UserComponent
                            key={index}
                            id={id}
                            name={name}
                            email={email}
                            username={username}
                        >asdasd</UserComponent>
                    )
            }
        </>
    );
}

export default App;
