import { Suspense, lazy } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import styles from './App.module.css';
// import * as Framer from 'framer';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <NavLink className={styles.navLink} to="/">Home</NavLink>
          <NavLink className={styles.navLink} to="/contacts">Contacts</NavLink>
          <NavLink className={styles.navLink} to="/login">Login</NavLink>
          <NavLink className={styles.navLink} to="/register">Register</NavLink>
        </nav>
      </header>
      <main>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/contacts" element={<ContactsPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
