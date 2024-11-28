"use client";
import Image from "next/image";
import styles from "./evento.module.css";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Evento() {
  const params = useParams()
  const [evento, setEvento] = useState({});
    useEffect(() => {
      fetch(`http://localhost:4000/api/event/${params.eventoId}`)
          .then((res) => res.json())  
          .then((data) => setEvento(data));
  }, [evento])

    

    return(
            <div className={styles.container}>
            <h1 className={styles.name}>{evento.nombre}</h1>
            <img src={evento.img} alt={evento.nombre} className={styles.imagenEvento} />
            
            <div className={styles.eventInfo}>
            <p><strong>Descripción:</strong> {evento.description}</p>
            <p><strong>Fecha:</strong> {evento.start_date ? evento.start_date.split("T")[0] : "Fecha no disponible"}</p>
            <p><strong>Entradas a la venta:</strong> {evento.max_assistance}</p>
            <p><strong>Precio:</strong> {evento.price}</p>
            <button className={styles.botonCompra}>Comprar Entradas</button>
            </div>
            </div>
        )
}