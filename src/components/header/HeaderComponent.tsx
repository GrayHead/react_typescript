import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './HeaderComponent.module.css'

const HeaderComponent = () => {
    return (
        <div className={styles.xxx}>
            <ul>
                <li><NavLink to={'/'}>auth page</NavLink></li>
                <li><NavLink to={'cars'}>cars page</NavLink></li>
            </ul>


            <hr/>
        </div>
    );
};

export default HeaderComponent;
