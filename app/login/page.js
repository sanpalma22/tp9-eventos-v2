import styles from './login.module.css'
import React from 'react';
function Login() {
  return (
    <div className={styles.contenedor}>
        <div className={styles.loginContainer}>
        <div className={styles.loginIcon}>👤</div>
        <input type="email" className={styles.loginInput} placeholder="Correo electrónico" />
        <input type="password" className={styles.loginInput} placeholder="Contraseña" />
        </div>
    </div>
  );
}

export default Login;
