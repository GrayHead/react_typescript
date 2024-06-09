import React, {FC} from 'react';
import {ICharacter} from "../models/ICharacter";

interface IProps {
    characters: ICharacter[];
}

const CharactersComponent: FC<IProps> = ({characters}) => {


    return (
        <div>
            {
                characters.map(character => (<div key={character.id}>{character.name}</div>))
            }
        </div>
    );
};

export default CharactersComponent;
