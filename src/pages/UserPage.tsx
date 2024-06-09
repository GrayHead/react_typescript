import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {userActions} from "../redux/slices/userSlice";

const UserPage = () => {

    const {id} = useParams();
    const dispatch = useAppDispatch();

    const user = useAppSelector(state => state.userSlice.user);
    useEffect(() => {
        dispatch(userActions.loadUserById(id));


    }, [id]);

    return (
        <div>
            {
                user && user.email
            }
        </div>
    );
};

export default UserPage;
