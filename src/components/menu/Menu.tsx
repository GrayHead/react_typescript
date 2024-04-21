import React, {memo} from 'react';

const Menu = memo(() => {
    console.log('menu')
    return (
        <div>
            <ul>
                <li>users</li>
                <li>posts</li>
                <li>comments</li>
            </ul>
        </div>
    );
});

export default Menu;
