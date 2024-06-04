import React from 'react';
import {useContextProvider} from "../context/ContextProvider";
import PostComponent from "./PostComponent";

const PostsComponent = () => {
    let {postStore: {allPosts}} = useContextProvider();
    return (
        <div>
            {
                allPosts.map(post=><PostComponent post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;
