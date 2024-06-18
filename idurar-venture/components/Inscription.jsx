import React, { useState } from 'react';
import styles from './Inscription.module.css';

const Inscription = () => {
  const today = new Date().toISOString().split('T')[0]; // Obtenir la date du jour au format 'YYYY-MM-DD'

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    activity: '',
    message: '',
    eventDate: today // Initialiser avec la date du jour
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'firstName' || name === 'lastName') {
      if (/[^a-zA-Z\s]/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: 'Ce champ ne doit contenir que des lettres.'
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: ''
        }));
      }
    }

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez gérer la soumission du formulaire, par exemple, envoyer les données à votre serveur
    console.log('Form submitted:', formData);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Inscription aux Activités</h1>
        <p className={styles.subtitle}>Inscrivez-vous à l'une de nos activités : Randonnée, Chasse, Parapente</p>
      </header>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          {errors.firstName && <p className={styles.error}>{errors.firstName}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Nom</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          {errors.lastName && <p className={styles.error}>{errors.lastName}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Téléphone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="activity">Activité</label>
          <select
            id="activity"
            name="activity"
            value={formData.activity}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionnez une activité</option>
            <option value="Randonnee">Randonnée</option>
            <option value="Chasse">Chasse</option>
            <option value="Parapente">Parapente</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="eventDate">Date de l'événement</label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className={styles.button}>S'inscrire</button>
      </form>
    </div>
  );
};

export default Inscription;
