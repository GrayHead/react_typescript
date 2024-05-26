import React, {FC} from 'react';
import {IPaginationPageModel} from "../models/IPaginationPageModel";

interface IProps {
    changePage: (action: string) => void;
    next: null | IPaginationPageModel;
    prev: null | IPaginationPageModel;
}

const PaginationComponent: FC<IProps> = ({next, prev, changePage}) => {
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
