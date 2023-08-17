import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk, selectFilteredContacts, requestContactsThunk } from '../../../redux/contactsReducer';
import styles from './ContactList.module.css'; // Підключення стилів з файлу ContactList.module.css

const ContactList = () => {
    const dispatch = useDispatch();
    const filteredContacts = useSelector(selectFilteredContacts);

    useEffect(() => {
        dispatch(requestContactsThunk());
    }, [dispatch]);

    const handleDeleteContact = id => {
        dispatch(deleteContactThunk(id));
    };

    return (
        <ul className={styles.listContainer}>
            {filteredContacts.map(contact => (
                <li key={contact.id} className={styles.listItem}>
                    <div className={styles.contactInfo}>
                        <h3 className={styles.name}>Name: {contact.name}</h3>
                        <p className={styles.number}>Number: {contact.number}</p>
                    </div>
                    <button
                        onClick={() => handleDeleteContact(contact.id)}
                        className={styles.deleteButton}
                        type="button"
                        aria-label="Delete contact"
                    >
                        &times;
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
