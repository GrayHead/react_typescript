import React, {useEffect, useState} from 'react';
import PaginationComponent from "../components/PaginationComponent";
import {useSearchParams} from "react-router-dom";
import CharactersComponent from "../components/CharactersComponent";
import {ICharacter} from "../models/ICharacter";
import {characterService} from "../services/api.service";
import {ICharactersResponse} from "../models/ICharactersResponse";

const MainLayout = () => {
    const [query, setQuery] = useSearchParams({page: '1'});


    const [characterResponseState, setCharacterResponseState] = useState<ICharactersResponse>({
        info: {
            count: 0,
            pages: 0,
            next: null,
            prev: null
        },
        results: []
    });

    useEffect(() => {
        const currentPage = query.get('page') || '1';
        characterService.getAll(currentPage).then(value => {
            setCharacterResponseState(value.data);
        });
    }, [query]);


    return (
        <div>
            <CharactersComponent characters={characterResponseState.results}/>
            <hr/>
            <PaginationComponent
                prev={characterResponseState.info.prev}
                next={characterResponseState.info.next}/>

        </div>
    );
};

export default MainLayout;
