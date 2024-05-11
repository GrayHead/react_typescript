import React, {FC} from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";

const ContactComponent: FC<any> = ({contact}) => {

    const navigate = useNavigate();

    const onClickNavigateHandler = () => {
        navigate(contact.id.toString(), {state: {contact}});
    };
    return (
        <div>
            {contact.email}
            <NavLink to={contact.id.toString()} state={{contact}}>details
            </NavLink> or

            <button
                onClick={onClickNavigateHandler}
            >details by button</button>

        </div>
    );
};

export default ContactComponent;
