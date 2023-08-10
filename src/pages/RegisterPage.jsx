import React from 'react';
import styles from './RegisterPage.module.css';


export const RegisterPage = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        const name = form.elements.userName.value;
        const email = form.elements.userEmail.value;
        const password = form.elements.userPassword.value;

        const finalUserData = {
            name,
            email,
            password
        }
        console.log(finalUserData);
    }

    return (

        <div className={styles.registrationForm}>
            <h1>Register your account</h1>
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