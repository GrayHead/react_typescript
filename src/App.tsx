import React, {FC, useEffect, useState} from 'react';
import './App.css';

const App: FC = () => {

    let [x, setX] = useState<number>(0);

    useEffect(() => {
        console.log('work');

        return ()=> {
            console.log('!!!');
        }
    }, [x]);

    return (
        <>
            <button onClick={() => {
                setX(prevState => ++prevState);
            }}>
                change
            </button>

        </>

    );
}

export default App;
