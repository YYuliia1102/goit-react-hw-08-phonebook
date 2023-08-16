import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk, selectUserContacts } from 'redux/contactsReducer';

const ContactList = () => {
    const contacts = useSelector(selectUserContacts);
    const dispatch = useDispatch();

    const handleDeleteContact = contactId => {
        dispatch(deleteContactThunk(contactId));
    };

    return (
        <ul>
            {contacts.map(contact => (
                <li key={contact.id}>
                    <h3>Name: {contact.name}</h3>
                    <p>Number: {contact.number}</p>
                    <button
                        onClick={() => handleDeleteContact(contact.id)}
                        type="button"
                        aria-label="Delete contact"
                        className="btn btn-danger btn-sm"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
