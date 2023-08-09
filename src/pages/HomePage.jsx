import React from "react";
import styles from "./HomePage.module.css";
// import * as Framer from 'framer';

export default function Home() {
    return (
        <div className={styles.content}>
            <div className={styles.hero}>
                <h1 className={styles.title}>Revolutionize Your Contacts Today!{" "}</h1>
            </div>
            <div className={styles.blueBlock}>
                <h3 className={styles.blueBlockTitle}>Welcome to Contact Book App!</h3>
                <p className={styles.blueBlockText}>
                    Tired of chaotic contact lists? Meet our stellar Contact Book App that’ll organize your life and keep all your contacts in one intuitive, easy-to-access place. Prepare to be amazed with an all-in-one contact management system that keeps your connections sorted and helps you enhance your relations with people who matter.
                </p>
            </div>
            <div className={styles.callToAction}>
                <h3 className={styles.userRegistration}>User Registration</h3>
                <p className={styles.join}>
                    Join us and enjoy an ocean of features that’ll enhance your contact management experience. Register now and let us do the rest!
                </p>
                <button className={styles.button}>Sign Up</button>
            </div>
        </div>
    );
}
