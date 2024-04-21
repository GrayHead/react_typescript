import React, {FC} from 'react';


interface IProps {
    name: string;
    image: string;
}

const Character: FC<IProps> = ({name,image}) => {

    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt={name}/>
        </div>
    );
};

export default Character;
