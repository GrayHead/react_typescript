import React from 'react';
import {useAppSelector} from "../redux/store";
import UserComponent from "./UserComponent";

const UsersComponent = () => {

    const {users, isLoaded} = useAppSelector(state => state.userSlice);
    return (
        <div>

            {
                isLoaded ? users.map(user => <UserComponent user={user} key={user.id}/>) : <h2>Loading....</h2>
            }


        </div>
    );
};

export default UsersComponent;
