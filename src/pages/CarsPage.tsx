import React, {useEffect, useState} from 'react';
import {authService, carService} from "../services/api.servce";
import CarsComponent from "../components/CarsComponent";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {useNavigate, useSearchParams} from "react-router-dom";
import PaginationComponent from "../components/PaginationComponent";
import {AxiosError} from "axios";

const CarsPage = () => {

    const navigate = useNavigate();
    const [query, setQuery] = useSearchParams();
    const [carPaginatedObject, setCarPaginatedObject] = useState<ICarPaginatedModel>({
        items: [],
        next: null,
        prev: null,
        total_pages: 0,
        total_items: 0
    });

    useEffect(() => {

        const getCarsData = async () => {

            try {
                const response = await carService.getCars(query.get('page') || '1');
                if (response) {
                    setCarPaginatedObject(response);
                }
            } catch (e) {
                const axiosError = e as AxiosError;
                if (axiosError && axiosError?.response?.status === 401) {
                    try {
                        await authService.refresh();
                    } catch (e) {
                        return navigate('/');
                    }

                    const response = await carService.getCars(query.get('page') || '1');
                    if (response) {
                        setCarPaginatedObject(response);
                    }


                }
            }

        }

        getCarsData();


    }, [query]);


    return (
        <div>
            <CarsComponent cars={carPaginatedObject.items}/>
            <PaginationComponent next={carPaginatedObject.next} prev={carPaginatedObject.prev}/>
        </div>
    );
};

export default CarsPage;
