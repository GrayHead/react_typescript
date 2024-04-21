import React, {FC, ReactNode} from 'react';
import IUser from "../../model/IUser";

type UserComponentWithChildren<T> = T & { children?: ReactNode };

const UserComponent: FC<UserComponentWithChildren<IUser>> = ({id, name}) => {
    return (
        <div> {id} - {name}</div>
    );
};
export default UserComponent;

