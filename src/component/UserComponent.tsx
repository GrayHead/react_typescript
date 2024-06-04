import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";
import {useContextProvider} from "../context/ContextProvider";


interface IProps {
    user: IUserModel
}

const UserComponent: FC<IProps> = ({user}) => {
    let {userStore: {set}} = useContextProvider();

    return (
        <div>
            {
                user.name
            }
            <button
                onClick={() => {
                    set(user);
                }}
            >lift
            </button>
        </div>
    );
};

export default UserComponent;
