import React, {FC} from 'react';
import './App.css';
import OriginalComponent1 from "./compoentns/OriginalComponent1";
import OriginalComponent2 from "./compoentns/OriginalComponent2";

const App: FC = () => {
    return (
        <>
            <OriginalComponent1/>
            <OriginalComponent2/>
        </>

    );
}

export default App;
