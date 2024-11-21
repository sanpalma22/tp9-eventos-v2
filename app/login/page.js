"use client"
import { TokenContext } from "../context/token"
import { useRouter } from 'next/navigation';
import styles from './login.module.css'
import React, { useContext, useState } from 'react';
import axios from 'axios';

function Login() {
  const router = useRouter();
  const [ user, setUser ] = useState()
  const [ pass, setPass ] = useState()
  const [ error, setError ] = useState()
  const { storageToken } = useContext(TokenContext)

  const loginUser = async () => {
    try {
      if(!user || !pass) {
        setError('Hay un campo incompleto.')
        return
      }
      const response = await axios.post('http://localhost:4000/api/user/login', {
        username: user,
        password: pass
      })
      if(response) {
        storageToken({
          token: response.data.token,
          username: user
        })
        router.push('/')
      }
    }
    catch (e) {
      setError(e.message)
      console.log(e)
    }
  }
  const handleClick = () => {
    router.push('/registro')
  }

  return (
    <div className={styles.contenedor}>
        <div className={styles.titulo}>
          <h1>Inicio de Sesion</h1>
        </div>
        <div className={styles.loginContainer}>
        <div className={styles.loginIcon}>👤</div>
        <input
          type="text"
          className={styles.loginInput}
          placeholder="Nombre de usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}  // Actualiza el estado de 'user'
        />
        <input
          type="password"
          className={styles.loginInput}
          placeholder="Contraseña"
          value={pass}
          onChange={(e) => setPass(e.target.value)}  // Actualiza el estado de 'pass'
        />
        {/* Muestra el mensaje de error si existe */}
        {error && <div className={styles.errorMessage}>{error}</div>}
        <button onClick={loginUser} className={styles.loginButton}>Iniciar sesión</button>
        <a href="/registro" onClick={handleClick} className={styles.botonregis}>Si no tienes cuenta registrate</a>
      </div>
    </div> 
  );
}


export default Login;
