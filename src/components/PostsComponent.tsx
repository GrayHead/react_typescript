import React from 'react';
import {useStore} from "../context/store";
import PostComponent from "./PostComponent";

const PostsComponent = () => {

    const {postStore: {allPosts}} = useStore();

    return (
        <div>
            {
                allPosts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;
