import React, {FC} from 'react';
import './App.css';
import Character from "./components/character/Character";

const App: FC = () => {


    return (
        <>
            <Character name={'bart'}
                       image={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}
            />
            <Character name={'homer'}
                       image={'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
            />


        </>

    );
}

export default App;
