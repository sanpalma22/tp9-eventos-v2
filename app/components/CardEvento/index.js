import styles from "./cardEvento.module.css"
import Link from "next/link";
export default function CardEvento({ evento }) {
  return (
    <div className={styles.cardEvento}>
      <div>
       <img src={evento.imagen} className={styles.imagen}></img>
      </div>
      <p className={styles.nombreEvento}>{evento.nombre}</p>
      <p className={styles.fechaEvento}>{evento.fecha}</p>
      <Link href={"/1"} className={styles.btnInfo}>Ver info</Link>
    </div>
  );
}
