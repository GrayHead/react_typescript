import React, {FC, useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {userActions} from "./redux/slices/userSlice";
import {postActions} from "./redux/slices/postSlice";


const App: FC = () => {

    const dispatch = useAppDispatch();

    const {userSlice: {users, isLoaded}, postSlice: {posts}} = useAppSelector(state => state);
    useEffect(() => {
        dispatch(userActions.loadUsers());
        dispatch(postActions.loadPosts())

    }, []);

    return (
        <div>
            {
                isLoaded ? users.map(user => <div key={user.id}>{user.name} : {
                    user.email
                }</div>) : <h2>Loading....</h2>
            }
            <hr/>
            {
                posts.map(post => <div key={post.id}> {post.title}</div>)
            }

        </div>

    );
}

export default App;
