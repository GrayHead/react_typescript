import React, {FC} from 'react';
import {IPost} from "../../model/IPost";


const PostComponent: FC<IPost> = ({id, userId, title, body}) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default PostComponent;
