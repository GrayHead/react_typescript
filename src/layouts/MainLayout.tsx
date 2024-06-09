import React, {useEffect} from 'react';
import PaginationComponent from "../components/PaginationComponent";
import {useSearchParams} from "react-router-dom";
import CharactersComponent from "../components/CharactersComponent";

const MainLayout = () => {


    return (
        <div>
            <CharactersComponent/>
            <hr/>
            <PaginationComponent/>

        </div>
    );
};

export default MainLayout;
