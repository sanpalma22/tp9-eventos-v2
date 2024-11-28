"use client";
import Image from "next/image";
import styles from "./page.module.css";
import CardEvento from "./components/CardEvento";
import { useEffect, useState } from "react";

export default function Home() {
  const [ eventos, setEventos ] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/api/event/")
            .then((res) => res.json())  
            .then((data) => setEventos(data.collection));
    }, [])
    console.log(eventos)

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
