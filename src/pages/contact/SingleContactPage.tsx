import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {IUserContactModel} from "../../models/IUserContactModel";
import {userApiService} from "../../services/api.service";
import {useAppLocation} from "../../components/hooks/useAppLocation";

const SingleContactPage = () => {

    const {id} = useParams();
    const {state: {contact: item}} = useAppLocation<{ contact: IUserContactModel }>();

    const [contact, setContact] = useState<IUserContactModel | null>(null);


    useEffect(() => {
        if (item) {
            setContact(item);
        } else if (id) {
            userApiService
                .getUserById(id)
                .then(value => setContact(value.data));
        } else {
            throw new Error('i fucker up');
        }
    }, [id, item]);

    return (
        <div>
            {contact && <>{contact.name} - {contact.username}</>}
        </div>
    );
};

export default SingleContactPage;
