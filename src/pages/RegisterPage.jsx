import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthentificated } from 'redux/authReducer';
import { registerUserThunk } from 'redux/operations';
import styles from './RegisterPage.module.css';


export const RegisterPage = () => {
    const dispatch = useDispatch();
    const authentificated = useSelector(selectAuthentificated);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        const name = form.elements.userName.value;
        const email = form.elements.userEmail.value;
        const password = form.elements.userPassword.value;

        dispatch(
            registerUserThunk({
                name,
                email,
                password,
            })
        );
    };

    if (authentificated) return <Navigate to="/contacts" />

    return (

        <div className={styles.registrationForm}>
            <h1 className={styles.title}>Register your account</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label className={styles.formLabel}>
                    <p className={styles.formLabelTitle}>Name:</p>
                    <input className={styles.formInput} name='userName' type="text" required minLength={2} />
                </label>
                <br />
                <label className={styles.formLabel}>
                    <p className={styles.formLabelTitle}>Email:</p>
                    <input className={styles.formInput} name='userEmail' type="email" required />
                </label>
                <br />
                <label className={styles.formLabel}>
                    <p className={styles.formLabelTitle}>Password:</p>
                    <input className={styles.formInput} name='userPassword' type="password" required minLength={7} />
                </label>
                <br />
                <button type='submit' className={styles.formButton}>Sign up</button>
            </form>
        </div>
    )
}

export default RegisterPage;