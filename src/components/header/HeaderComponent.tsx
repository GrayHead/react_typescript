import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './HeaderComponent.module.css'

const HeaderComponent = () => {
    return (
        <div className={styles.xxx}>
            <span><NavLink to={'about'}>about</NavLink> </span>

            <span><NavLink to={'contacts'}>contacts</NavLink></span>

            <span><NavLink to={'asdsad'}>adssadas</NavLink></span>

            <hr/>
        </div>
    );
};

export default HeaderComponent;
