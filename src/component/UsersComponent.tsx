import React, {FC} from 'react';
import {useContextProvider} from "../context/ContextProvider";
import UserComponent from "./UserComponent";

const UsersComponent: FC = () => {
    let {userStore: {allUsers}} = useContextProvider();
    return (
        <div>
            {
                allUsers.map(user => <UserComponent user={user}/>)

            }
        </div>
    );
};

export default UsersComponent;
