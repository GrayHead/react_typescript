import React, {FC, ReactNode} from 'react';
import './Character.css'

interface IProps {
    name: string;
    image: string;
    // children?: React.ReactNode;
}

type PropsWithChildren<X> = X & { children?: ReactNode };

const Character: FC<PropsWithChildren<IProps>> = ({name, image, children}) => {

    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            <p>{children}</p>
        </div>
    );
};

export default Character;
