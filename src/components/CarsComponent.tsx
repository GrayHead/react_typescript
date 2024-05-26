import React, {FC} from 'react';
import {ICarWithAuth} from "../models/ICarWithAuth";

interface IProps {
    cars: ICarWithAuth[];
}

const CarsComponent: FC<IProps> = ({cars}) => {
    return (
        <div>
            {
                cars.map(value =>
                    <div key={value.id}>{value.id}
                        {value.brand}
                    </div>)
            }
        </div>
    );
};

export default CarsComponent;
