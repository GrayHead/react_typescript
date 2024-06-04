import React from 'react';
import UserComponent from "./UserComponent";
import {useStore} from "../context/store";

const UsersComponent = () => {

    const {userStore:{allUsers}} = useStore();
    return (
        <div>
            {
                allUsers.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;
