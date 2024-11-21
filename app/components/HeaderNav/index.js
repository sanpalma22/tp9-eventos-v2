'use client'
import { useContext } from "react";
import { TokenContext } from "../../context/token";  // Asegúrate de tener la ruta correcta
import styles from "./headerNav.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";  // Para redirigir al usuario después de cerrar sesión

export default function HeaderNav() {
  const { session, cleanSession, isLoggedIn } = useContext(TokenContext);
  const router = useRouter();  // Para poder redirigir después de cerrar sesión

  const handleLogout = () => {

    const confirmLogout = window.confirm("¿Estás seguro de que quieres cerrar sesión?");
  
    if (confirmLogout) {
      cleanSession();  // Limpia el token de la sesión
      router.push("/login");  // Redirige al usuario al login
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/contacto">Contacto</Link>
      </nav>
      {isLoggedIn ? (
        <div className={styles.userMenu}>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/019/879/198/small/user-icon-on-transparent-background-free-png.png" className={styles.logo}></img>
          <span className={styles.userName}>{session.username}</span>
          <button onClick={handleLogout} className={styles.logoutButton}>
            Cerrar sesión
          </button>
        </div>
      ) : (
        <Link href="/login" className={styles.loginButton}>
          Iniciar sesión
        </Link>
      )}
    </header>
  );
}
