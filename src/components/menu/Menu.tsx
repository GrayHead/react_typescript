import React, {FC, memo} from 'react';

type IProps = {
    someFunction: () => void
}
const Menu: FC<IProps> = memo(() => {
    console.log('menu');
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
