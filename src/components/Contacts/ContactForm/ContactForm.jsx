import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk, selectUserContacts } from 'redux/contactsReducer';
import styles from './ContactForm.module.css';
import InputMask from 'react-input-mask';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(selectUserContacts);
    const dispatch = useDispatch();
    const numberInputRef = React.createRef();

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

    const handleNumberChange = event => {
        setNumber(event.target.value);
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
                <InputMask
                    className={styles.inputField}
                    name="contactNumber"
                    mask="+3-999-999-9999"
                    placeholder="+3-000-000-0000"
                    value={number}
                    onChange={handleNumberChange}
                    ref={numberInputRef}
                    required
                />
            </label>
            <button
                type="submit"
                className={styles.submitButton}
                onClick={() => {
                    if (numberInputRef.current) {
                        numberInputRef.current._inputElement.blur();
                    }
                }}
            >
                Add Contact
            </button>
        </form>
    );
};

export default ContactForm;
