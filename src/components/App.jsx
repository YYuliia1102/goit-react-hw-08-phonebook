import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Routes } from "react-router-dom";
import { selectAuthentificated, selectToken } from "redux/authReducer";
import { logoutUserThunk, refreshUserThunk } from '../redux/operations.js';
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import styles from './App.module.css';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authentificated = useSelector(selectAuthentificated);

  useEffect(() => {
    if (!token || authentificated) return;

    dispatch(refreshUserThunk());
  }, [token, dispatch, authentificated]);

  const handleLogOut = () => {
    dispatch(logoutUserThunk());
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <NavLink className={styles.navLink} to="/">Home</NavLink>
          {authentificated ? (
            <>
              <NavLink className={styles.navLink} to="/contacts">Contacts</NavLink>
              <button className={styles.button} onClick={handleLogOut}>Log Out</button>
            </>
          ) : (
            <>
              <NavLink className={styles.navLink} to="/login">Login</NavLink>
              <NavLink className={styles.navLink} to="/register">Register</NavLink>
            </>
          )}
        </nav>
      </header>
      <main>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo='/login'>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
