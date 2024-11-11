"use client";
import Image from "next/image";
import styles from "./evento.module.css";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function Evento() {
    const [evento, setEvento] = useState({
    nombre: "Partido de Racing",
      imagen: "https://media-cdn.tripadvisor.com/media/photo-s/0d/34/e2/b7/espectaculo-unico.jpg",
      fecha: "2024-02-21",
    });
    const params = useParams()
  
    // useEffect(() => {
    //   async function fetchEvento() {
    //     try {
    //       const response = await fetch(`http://localhost:5000/${params.eventoId}`);
    //       if (!response.ok) {
    //         throw new Error("Error al obtener los datos");
    //       }
    //       const data = await response.json();
    //       setEvento(data[0]);
    //     } catch (error) {
    //       console.error("Error al obtener el evento:", error);
    //     }
    //   }
  
    //   fetchEvento();
    // }, [evento]);

    return(
            <div className={styles.container}>
            <h1 className={styles.tituloEvento}>{evento.nombre}</h1>
            <img src={evento.imagen} alt={evento.nombre} className={styles.imagenEvento} />
            
            <div className={styles.eventInfo}>
            <p><strong>Descripción:</strong> {evento.descripcion}</p>
            <p><strong>Fecha:</strong> {evento.fecha}</p>
            <p><strong>Ubicación:</strong> {evento.ubicacion}</p>
            <p><strong>Precio:</strong> {evento.precio}</p>
            <button className={styles.botonCompra}>Comprar Entradas</button>
            </div>
            </div>
        )
}