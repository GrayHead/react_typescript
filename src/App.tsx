import React, {FC, useState} from 'react';
import './App.css';
import Menu from "./components/menu/Menu";
import User from "./components/user/User";

const App: FC = () => {
    const [id, setId] = useState<number>(1)
    const incrmentId = () => {
        setId(prevState => ++prevState);
    }
    return (
        <>
            <Menu/>
            <User id={id}/>
            <button onClick={incrmentId}>increment id</button>
        </>

    );
}

export default App;
