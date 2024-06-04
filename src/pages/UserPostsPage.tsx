import React, {useEffect, useMemo, useState} from 'react';
import {useContextProvider} from "../context/ContextProvider";
import UserPostsComponent from "../component/UserPostsComponent";
import {UserWithPostsType} from "../models/UserWithPostsType";

const UserPostsPage = () => {

    let {userStore: {allUsers}, postStore: {allPosts}} = useContextProvider();

    const [usersWithPostsState, setUsersWithPostsState] = useState<UserWithPostsType[]>([]);

    const userWithPostsArrayResultMemo = useMemo(() => {

        return allUsers.map((user: any) => {
            return {...user, posts: allPosts.filter((post: any) => post.userId === user.id)};
        })
    }, [allUsers, allPosts]);

    useEffect(() => {

        setUsersWithPostsState(userWithPostsArrayResultMemo);
    }, [userWithPostsArrayResultMemo, usersWithPostsState]);

    return (
        <div>
            <UserPostsComponent items={usersWithPostsState}/>
        </div>
    );
};

export default UserPostsPage;
