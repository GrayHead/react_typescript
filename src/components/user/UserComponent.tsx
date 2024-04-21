import React, {FC, ReactNode} from 'react';
import IUser from "../../model/IUser";

type UserComponentWithChildren<T> = T
    & { children?: ReactNode }
    & { clickHandler: (id: number) => void };

const UserComponent: FC<UserComponentWithChildren<IUser>> = ({
                                                                 id, name
                                                                 , clickHandler
                                                             }) => {
    return (
        <div> {id} - {name}
            <button onClick={() => {
                clickHandler(id);
            }}>chose
            </button>
        </div>
    );
};
export default UserComponent;

