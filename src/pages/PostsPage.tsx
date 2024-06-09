import React from 'react';
import {useAppSelector} from "../redux/store";

const PostsPage = () => {

    const {posts} = useAppSelector(state => state.postSlice);
    return (
        <div>
            {
                posts.map(post => <div key={post.id}> {post.title}</div>)
                
            }

        </div>
    );
};

export default PostsPage;
