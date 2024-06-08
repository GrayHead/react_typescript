import React, {FC, useEffect} from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import {postActions, useAppDispatch, useAppSelector, userActions} from "./redux/store";
import {postService} from "./services/api.service";


const App: FC = () => {

    const dispatch = useAppDispatch();

    const {userSlice: {users}, postSlice: {posts}} = useAppSelector(state => state);
    useEffect(() => {
        dispatch(userActions.loadUsers());
        dispatch(postActions.loadPosts())
    }, []);

    return (
        <div>
            {
                users.map(user => <div>{user.name} : {
                    user.email
                }</div>)


            }

            <hr/>
            {
                posts.map(post => <div> {post.title}</div>)
            }

        </div>

    );
}

export default App;
