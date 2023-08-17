
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestContactsThunk } from 'redux/contactsReducer';
import ContactForm from '../components/Contacts/ContactForm/ContactForm';
import ContactList from '../components/Contacts/ContactList/ContactList';
import Filter from 'components/Contacts/Filter/Filter';

const ContactsPage = () => {
    const authentificated = useSelector(state => state.auth.authentificated);
    const dispatch = useDispatch();

    useEffect(() => {
        if (authentificated) {
            dispatch(requestContactsThunk());
        }
    }, [authentificated, dispatch]);

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <h5>Find contacts by name</h5>
            <Filter />
            <ContactList />
        </div>
    );
};

export default ContactsPage;
