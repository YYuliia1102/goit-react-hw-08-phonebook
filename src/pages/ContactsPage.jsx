import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectAuthentificated } from 'redux/authReducer';
import {
    addContactThunk,
    deleteContactThunk,
    requestContactsThunk,
    selectContactsError,
    selectUserContacts,
} from 'redux/contactsReducer';


const ContactsPage = () => {
    const authentificated = useSelector(selectAuthentificated);
    const contacts = useSelector(selectUserContacts);
    const error = useSelector(selectContactsError);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!authentificated) return;

        dispatch(requestContactsThunk());
    }, [authentificated, dispatch]);

    const handleDeleteContact = contactId => {
        dispatch(deleteContactThunk(contactId));
    };

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.currentTarget;

        const name = form.elements.contactName.value;
        const number = form.elements.contactNumber.value;

        if (contacts.some(contact => contact.name === name))
            return alert(`Contact with name ${name} already exists!`);

        dispatch(addContactThunk({ name, number }));
    };
    const showContacts = Array.isArray(contacts) && contacts.length > 0;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Name:</p>
                    <input
                        name="contactName"
                        type="text"
                        placeholder="John Doe"
                        required />
                </label>
                <br />
                <label>
                    <p>Number:</p>
                    <input
                        name="contactNumber"
                        type="tel"
                        placeholder="+1-123-456-7890"
                        required />
                </label>
                <br />
                <button type="submit" className="btn btn-primary">
                    Add Contact
                </button>
            </form>

            {error && <p>Oops, some error occurred... {error}</p>}
            <ul>
                {showContacts && contacts.map(contact => {
                    return <li key={contact.id}>
                        <h3>Name: {contact.name}</h3>
                        <p>Number: {contact.number}</p>
                        <button className="btn btn-danger btn-sm" onClick={handleDeleteContact}>
                            Delete
                        </button>
                    </li>

                })}
            </ul>
        </div>
    )
}

export default ContactsPage;