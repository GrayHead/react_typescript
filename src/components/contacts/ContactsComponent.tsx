import React, {FC, useEffect, useState} from 'react';
import ContactComponent from "../contact/ContactComponent";
import {IUserContactModel} from "../../models/IUserContactModel";
import {userApiService} from "../../services/api.service";

const ContactsComponent: FC = () => {
    const [contacts, setContacts] = useState<IUserContactModel[]>([]);

    useEffect(() => {
        userApiService
            .getAllUsers()
            .then(value => {
                setContacts(value.data)
            });

    }, []);
    return (
        <div>
            {
                contacts.map((contact, index) =>
                    (<ContactComponent key={index} contact={contact}/>))
            }
        </div>
    );
};

export default ContactsComponent;
