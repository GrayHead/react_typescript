import React, {useEffect, useState} from 'react';
import {characterService} from "../services/api.service";
import {ICharacter} from "../models/ICharacter";
import {useSearchParams} from "react-router-dom";

const CharactersComponent = () => {

    const [query, setQuery] = useSearchParams({page: '1'});

    const [charactersState, setCharactersState] = useState<ICharacter[]>([])
    useEffect(() => {
        const currentPage = query.get('page') || '1';

        characterService.getAll(currentPage).then(value => {
            setCharactersState(value.data.results);
        });
    }, [query]);

    return (
        <div>
            {
                charactersState.map(character => (<div key={character.id}>{character.name}</div>))
            }
        </div>
    );
};

export default CharactersComponent;
