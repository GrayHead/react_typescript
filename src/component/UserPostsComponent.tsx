import React, {FC} from 'react';
import {UserWithPostsType} from "../models/UserWithPostsType";

interface IProps {
    items: UserWithPostsType[];
}

const UserPostsComponent: FC<IProps> = ({items}) => {
    return (
        <div>
            {
                items.map(item => <div>{item.name}
                    <ul>
                        {
                            item.posts.map(post => <li>{post.title}</li>)
                        }
                    </ul>
                </div>)
            }
        </div>
    );
};

export default UserPostsComponent;
