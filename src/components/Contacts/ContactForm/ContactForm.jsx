import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk, selectUserContacts } from 'redux/contactsReducer';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(selectUserContacts);
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();

        if (contacts.some(contact => contact.name === name)) {
            alert(`Contact with name ${name} already exists!`);
            return;
        }

        dispatch(addContactThunk({ name, number }));
        setName('');
        setNumber('');
    };

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <label className={styles.label}>
                <p>Name:</p>
                <input
                    className={styles.inputField}
                    name="contactName"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
            </label>
            <label className={styles.label}>
                <p>Number:</p>
                <input
                    className={styles.inputField}
                    name="contactNumber"
                    type="tel"
                    placeholder="+1-123-456-7890"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                    required
                />
            </label>
            <button type="submit" className={styles.submitButton}>
                Add Contact
            </button>
        </form>
    );
};

export default ContactForm;
