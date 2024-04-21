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


    const [userId, setUserId] = useState<number>(0)

    const clickHandler = (id: number) => {
        setUserId(id);
        console.log('.');
    }


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
                            clickHandler={clickHandler}

                        />
                    )
            }

            <h2>{userId}</h2>
        </>
    );
}

export default App;
