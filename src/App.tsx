import React, {FC, useCallback, useState} from 'react';
import './App.css';
import Menu from "./components/menu/Menu";
import User from "./components/user/User";

const App: FC = () => {
    const [id, setId] = useState<number>(1)
    const incrmentId = () => {
        setId(prevState => ++prevState);
    }

    const someFunction = useCallback(() => {
        console.log('asd');
    }, [id]);

    return (
        <>
            <Menu someFunction={someFunction}/>
            <User id={id}/>
            <button onClick={incrmentId}>increment id</button>
        </>

    );
}

export default App;
