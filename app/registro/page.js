'use client'
import { useRouter } from 'next/navigation';
import styles from './registro.module.css';
import React, { useState } from 'react';
import axios from 'axios';  // Verifica que axios esté importado correctamente

function registro() {
  const router = useRouter();
  const [user, setUser] = useState('');
  const [name, setName] = useState('');
  const [last, setLast] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState();

  const registerUser = async () => {
    try {
      // Verifica que todos los campos estén completos
      if (!user || !pass || !last || !name) {
        setError('Hay un campo incompleto.');
        return;
      }

      // Asegúrate de que axios esté correctamente importado y disponible
      console.log(axios);  // Esto debería mostrar el objeto axios en la consola

      const res = await axios.post('http://localhost:4000/api/user/register', {
        first_name: name,
        last_name: last,
        username: user,
        password: pass
      });

      // Si la respuesta es exitosa, redirige al login
      if (res) router.push('/login');
    } catch (e) {
      setError(e.message);
      console.log(e);
    }
  };

  const handleClick = () => {
    router.push('/signup');
  };

  return (
    <div className={styles.caja}>
      <div className={styles.contenedor}>
        <div className={styles.titulo}>
          <h1>Registro</h1>
        </div>
        <div className={styles.loginContainer}>
          <div className={styles.loginIcon}>👤</div>
          <input
            type="text"
            className={styles.loginInput}
            placeholder="Escriba su nombre de usuario"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="text"
            className={styles.loginInput}
            placeholder="Escriba su nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className={styles.loginInput}
            placeholder="Escriba su apellido"
            value={last}
            onChange={(e) => setLast(e.target.value)}
          />
          <input
            type="password"
            className={styles.loginInput}
            placeholder="Elija su contraseña"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button onClick={registerUser} className={styles.loginButton}>
            Registrarse
          </button>
          {error && <p className={styles.error}>{error}</p>}
          <a href="/login" onClick={handleClick} className={styles.botonregis}>
            ¿Tienes cuenta? Inicia sesión aquí
          </a>
        </div>
      </div>
    </div>
  );
}

export default registro;
