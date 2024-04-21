import React, {FC} from 'react';
import withFetch from "../hoc/withFetch";

interface IProps {
    items: { id: number, name: string }[];
}

const UserComponent: FC<IProps> = (props) => {
    console.log(props);
    return (
        <div>
            {/*        */}
        </div>
    );
};

export default withFetch(UserComponent, '/users');
