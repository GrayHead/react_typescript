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
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias aliquam assumenda, atque,
                consectetur cumque enim eos maiores nemo nobis provident quae quidem ratione sint sit tempore temporibus
                ullam?
            </Character>

            <Character name={'marge'}
                       image={'https://i.pinimg.com/originals/af/76/7e/af767e6f4e6cb929c42c8c17bb0bae1e.png'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias architecto, consequuntur cum
                cupiditate eaque eligendi, est expedita fuga illo laboriosam nesciunt obcaecati odio rem reprehenderit
                similique soluta vel, voluptatibus?

            </Character>

        </>

    );
}

export default App;
