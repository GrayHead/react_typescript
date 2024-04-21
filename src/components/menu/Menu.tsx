import React, {FC, memo} from 'react';

type IProps = {
    links: string[];
}
const Menu: FC<IProps> = memo(({links}) => {
    console.log('menu');
    return (
        <div>
            <ul>{
                links.map((item, i) => <li key={i}>{item}</li>)

            }
            </ul>
        </div>
    );
});

export default Menu;
