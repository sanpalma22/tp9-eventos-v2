import Image from "next/image";
import styles from "./page.module.css";
import CardEvento from "./components/CardEvento";

export default function Home() {
  const eventos = [
    {
      nombre: "Partido de Racing",
      imagen:
        "https://media-cdn.tripadvisor.com/media/photo-s/0d/34/e2/b7/espectaculo-unico.jpg",
      fecha: "2024-02-21",
    },
    {
      nombre: "Concierto de Los Piojos",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-r5ou95M6xf_AIZL_6JP9bKFsT453PwekgA&s",
      fecha: "2024-03-15",
    },
    {
      nombre: "Feria de Libros",
      imagen: "https://statics.eleconomista.com.ar/2022/04/626aa83c26e0c.jpg",
      fecha: "2024-04-10",
    },
    {
      nombre: "Festival Gastronómico",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW1k3rG6XMDqBuQFDHfhPgYWK6jPQNCT2MSg&s",
      fecha: "2024-05-20",
    },
    {
      nombre: "Museo Bellas Artes",
      imagen:
        "https://turismo.buenosaires.gob.ar/sites/turismo/files/museo-nacional-bellas-artes-1500x610-interior.jpg",
      fecha: "2024-06-05",
    },
    {
      nombre: "Concierto YSY A",
      imagen: "https://i.ytimg.com/vi/U4BCd4pz9Vc/maxresdefault.jpg",
      fecha: "2024-06-07",
    },
    {
      nombre: "Concierto YSY A",
      imagen: "https://i.ytimg.com/vi/U4BCd4pz9Vc/maxresdefault.jpg",
      fecha: "2024-06-07",
    },
  ];

  return (
    <>
    <div className={styles.titulo}>
      <h1>Página principal</h1>
      <h2>Eventos</h2>
    </div>
      <div className={styles.container}>
        {eventos.map((e) => (
          <CardEvento evento={e}></CardEvento>
        ))}
      </div>
    </>
  );
}
