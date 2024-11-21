import Image from "next/image";
import styles from "./headerNav.module.css";
import Link from "next/link";

export default function HeaderNav({ usuario }) {

  // usuario = { nombre: "carlos" }; 

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/"><Image src={'/logo.png'} alt="Logo del sitio" width={100} height={100} className={styles.logo}/></Link>
        </div>
        <Link href="/">Home</Link>
        <Link href="/contacto">Contacto</Link>
      </nav>
      {usuario ? (
        <div className={styles.userMenu}>
          <span className={styles.userName}>{usuario.nombre}</span>
          <button className={styles.logoutButton}>Cerrar sesión</button>
        </div>
      ) : (
        <Link href="/login" className={styles.loginButton}>
          Iniciar sesión
        </Link>
      )}
    </header>
  );
}
