import React, {FC, useEffect, useState} from 'react';

type IProps = {
    id: number;
    name?: string;
}
const User: FC<IProps> = ({id}) => {
    console.log('user component');


    const [user, setUser] = useState<IProps | null>(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(value => value.json())
            .then(value => {
                setUser(value);
            });

    }, []);
    return (
        <div>
            {user && <h2>user.name</h2>}
        </div>
    );
};

export default User;
