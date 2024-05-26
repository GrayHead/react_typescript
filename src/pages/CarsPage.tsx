import React, {useEffect, useState} from 'react';
import {carService} from "../services/api.servce";
import CarsComponent from "../components/CarsComponent";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {useSearchParams} from "react-router-dom";
import PaginationComponent from "../components/PaginationComponent";

const CarsPage = () => {

    const [query, setQuery] = useSearchParams({page: '1'});


    const [carPaginatedObject, setCarPaginatedObject] = useState<ICarPaginatedModel>({
        items: [],
        next: null,
        prev: null,
        total_pages: 0,
        total_items: 0
    });
    useEffect(() => {
        carService.getCars(query.get('page') || '1').then(value => {
            if (value) {
                setCarPaginatedObject(value);
            }
        });
    }, [query]);

    const changePage = (nextOrPrev: string) => {
        switch (nextOrPrev) {
            case 'next':
                setQuery({...carPaginatedObject.next});
                break;
            case 'prev':
                setQuery({...carPaginatedObject.prev});
                break;

        }

    };
    return (
        <div>
            <CarsComponent cars={carPaginatedObject.items}/>
            <PaginationComponent next={carPaginatedObject.next} prev={carPaginatedObject.prev} changePage={changePage}/>
        </div>
    );
};

export default CarsPage;
