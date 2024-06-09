import React, {FC} from 'react';
import {IUser} from "../models/IUser";
import {useNavigate} from "react-router-dom";

interface IProps {
    user: IUser;
}

const UserComponent: FC<IProps> = ({user}) => {
    const navigate = useNavigate();
    return (
        <div>
            {user.id} : {user.name}
            <button onClick={() => {
                navigate(`${user.id}`);
            }}>details
            </button>
        </div>
    );
};

export default UserComponent;
