import styles from "./cardEvento.module.css"
import Link from "next/link";
export default function CardEvento({ evento }) {
  return (
    <div className={styles.cardEvento}>
      <div>
       <img src={evento.imagen} className={styles.imagen}></img>
      </div>
      <p className={styles.nombreEvento}>{evento.name}</p>
      <p className={styles.fechaEvento}>{evento.start_date.split("T")[0]}</p>
      <Link href={`/${evento.id}`} className={styles.btnInfo}>Ver info</Link>
    </div>
  );
}
