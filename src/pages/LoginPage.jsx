import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthentificated } from 'redux/authReducer';
import { loginUserThunk } from 'redux/operations';
import styles from './RegisterPage.module.css';


export const LoginPage = () => {
    const dispatch = useDispatch();
    const authentificated = useSelector(selectAuthentificated);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const email = form.elements.userEmail.value;
        const password = form.elements.userPassword.value;


        dispatch(
            loginUserThunk({
                email,
                password,
            })
        );
    };

    if (authentificated) return <Navigate to="/contacts" />


    return (

        <div className={styles.registrationForm}>
            <h1 className={styles.title}>Login into your account</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
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
                <button type='submit' className={styles.formButton}>Sign in</button>
            </form>
        </div>
    )
}

export default LoginPage;