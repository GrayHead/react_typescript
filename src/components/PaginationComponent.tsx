import React, {FC} from 'react';
import {IPaginationPageModel} from "../models/IPaginationPageModel";
import {useSearchParams} from "react-router-dom";

interface IProps {

    next: null | IPaginationPageModel;
    prev: null | IPaginationPageModel;
}


const PaginationComponent: FC<IProps> = ({next, prev}) => {
    const [query, setQuery] = useSearchParams({page: '1'});


    const changePage = (nextOrPrev: string) => {
        switch (nextOrPrev) {
            case 'next':
                setQuery({...next});
                break;
            case 'prev':
                setQuery({...prev});
                break;

        }

    };

    return (
        <div>
            <button
                disabled={!prev}
                onClick={() => {
                    changePage('prev');
                }}>prev
            </button>
            <button
                disabled={!next}
                onClick={() => {
                    changePage('next');

                }}>next
            </button>
        </div>
    );
};

export default PaginationComponent;
