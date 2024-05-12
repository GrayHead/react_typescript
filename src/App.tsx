import React, {FC} from 'react';
import './App.css';
import SomeComponent from "./components/SomeComponent";
import WrapComponent from "./hoc/WrapComponent";

const App: FC = () => {
    return (
        <>

            <WrapComponent>
                <SomeComponent/>
            </WrapComponent>


        </>

    );
}

export default App;
