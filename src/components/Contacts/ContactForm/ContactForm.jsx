import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk, selectUserContacts } from 'redux/contactsReducer';

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
        <form onSubmit={handleSubmit}>
            <label>
                <p>Name:</p>
                <input
                    name="contactName"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                <p>Number:</p>
                <input
                    name="contactNumber"
                    type="tel"
                    placeholder="+1-123-456-7890"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                    required
                />
            </label>
            <br />
            <button type="submit" className="btn btn-primary">
                Add Contact
            </button>
        </form>
    );
};

export default ContactForm;
