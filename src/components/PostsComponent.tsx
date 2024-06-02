import React from 'react';
import {useContextProvider} from "../context/ContextProvider";
import PostComponent from "./PostComponent";

const PostsComponent = () => {
    const {postStore: {allPosts}} = useContextProvider();
    return (
        <div>
            {
                allPosts.map((post) => (<PostComponent post={post} key={post.id}/>))
            }
        </div>
    );
};

export default PostsComponent;
