import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectAuthentificated } from 'redux/authReducer';
import {
    addContactThunk,
    deleteContactThunk,
    requestContactsThunk,
    selectContactsError,
    // selectContactsIsLoading,
    selectUserContacts,
} from 'redux/contactsReducer';


const ContactsPage = () => {
    const authentificated = useSelector(selectAuthentificated);
    const contacts = useSelector(selectUserContacts);
    // const isLoading = useSelector(selectContactsIsLoading);
    const error = useSelector(selectContactsError);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!authentificated) return;

        dispatch(requestContactsThunk());
    }, [authentificated, dispatch]);

    const showContats = Array.isArray(contacts) && contacts.length > 0;

    return (
        <div>
            {error && <p>Oops, some error occurred... {error}</p>}
            <ul>
                {showContats && contacts.map(contact => {
                    return <li key={contact.id}>
                        <h3>Name: {contact.name}</h3>
                        <p>Number: {contact.number}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default ContactsPage;