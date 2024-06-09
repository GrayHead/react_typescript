import React, {useEffect} from 'react';
import PaginationComponent from "../components/PaginationComponent";
import {useSearchParams} from "react-router-dom";

const MainLayout = () => {

    const [query] = useSearchParams();


    useEffect(() => {
        console.log(query.get('page'));

    }, [query]);
    return (
        <div>

            <PaginationComponent/>

        </div>
    );
};

export default MainLayout;
