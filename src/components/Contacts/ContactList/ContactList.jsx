import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk, selectFilteredContacts, requestContactsThunk } from '../../../redux/contactsReducer';
import styles from './ContactList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactList = () => {
    const dispatch = useDispatch();
    const filteredContacts = useSelector(selectFilteredContacts);

    useEffect(() => {
        dispatch(requestContactsThunk());
    }, [dispatch]);

    const handleDeleteContact = id => {
        dispatch(deleteContactThunk(id));
    };

    const handleCall = phoneNumber => {
        window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <ul className={styles.listContainer}>
            {filteredContacts.map(contact => (
                <li key={contact.id} className={styles.listItem}>
                    <div className={styles.contactInfo}>
                        <h3 className={styles.name}>
                            <FontAwesomeIcon icon={faUser} /> {contact.name}
                        </h3>
                        <p className={styles.number}>
                            <FontAwesomeIcon icon={faPhone} />{' '}
                            <a
                                href={`tel:${contact.number}`}
                                onClick={e => {
                                    e.preventDefault();
                                    handleCall(contact.number);
                                }}
                            >
                                {contact.number}
                            </a>
                        </p>
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
