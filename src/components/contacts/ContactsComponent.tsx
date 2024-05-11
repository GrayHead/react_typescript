import React, {useEffect, useState} from 'react';
import ContactComponent from "../contact/ContactComponent";

const ContactsComponent = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => {
                setContacts(users);
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
