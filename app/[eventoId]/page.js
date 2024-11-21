"use client";
import Image from "next/image";
import styles from "./evento.module.css";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Evento() {
  const {id} = useParams()
  const [evento, setEvento] = useState({});
    useEffect(() => {
      fetch(`http://localhost:3000/api/event/${id}`)
          .then((res) => res.json())  
          .then((data) => setEvento(data));
  }, [id,evento])

    

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