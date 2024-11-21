import styles from './registro.module.css'
import React from 'react';
function registro() {
  return (
    <div className={styles.caja}>
      <div className={styles.contenedor}>
        <div className={styles.titulo}>
          <h1>Registro</h1>
        </div>
          <div className={styles.loginContainer}>

            <div className={styles.loginIcon}>👤</div>
            <input type="email" className={styles.loginInput} placeholder="Escriba su correo electrónico" />
            <input type="password" className={styles.loginInput} placeholder="Elija su contraseña" />
            <input type="password" className={styles.loginInput} placeholder="Escriba su numero de telefono" />
            <input type="password" className={styles.loginInput} placeholder="Escriba su nombre" />
          </div>
      </div>
    </div>
  );
}

export default registro;
