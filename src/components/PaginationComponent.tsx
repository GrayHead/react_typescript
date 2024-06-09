import React, {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

interface IProps {
    prev: string | null;
    next: string | null;
}

const PaginationComponent: FC<IProps> = ({prev, next}) => {

    const [query, setQuery] = useSearchParams({page: '1'});
    useEffect(() => {
        console.log(prev, next);
    }, [prev, next]);


    return (
        <div>
            <button
                disabled={!prev}
                onClick={() => {
                    const page = query.get('page');
                    if (page) {
                        let currentPage = +page;
                        currentPage--;
                        setQuery({page: currentPage.toString()})
                    }
                }}>prev
            </button>

            <button
                disabled={!next}
                onClick={() => {
                    const page = query.get('page');
                    if (page) {
                        let currentPage = +page;
                        currentPage++;
                        setQuery({page: currentPage.toString()});
                    }


                }}>next
            </button>
        </div>
    );
};

export default PaginationComponent;
