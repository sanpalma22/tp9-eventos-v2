"use client";
import styles from "./contacto.module.css";
import { useState } from "react";

export default function Contacto() {
  const handleSubmit = (e) => {
    alert("Formulario enviado con exito")
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.tituloContacto}>Contactanos</h1>

      <div className={styles.contactInfo}>
        <p>¿Tenes preguntas o comentarios?</p>
        <p>Llena el formulario de abajo o envianos un correo a <strong>ticketekcontacto@gmail.com</strong>.</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.formulario}>
        <div className={styles.inputGroup}>
          <label htmlFor="nombre">Nombre:</label>
          <input required/>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="correo">Correo electrónico:</label>
          <input required/>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea required/>
        </div>

        <button type="submit" className={styles.botonEnviar}>Enviar</button>
      </form>
    </div>
  );
}
