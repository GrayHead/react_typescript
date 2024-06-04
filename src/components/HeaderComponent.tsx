import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>

            <ul>
                <li><Link to={'/'}>home</Link></li>
                <li><Link to={'users'}>user page</Link></li>
                <li><Link to={'posts'}>posts page</Link></li>
                <li><Link to={'userPosts'}>users with posts page</Link></li>
            </ul>

        </div>
    );
};

export default HeaderComponent;
