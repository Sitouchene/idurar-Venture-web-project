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
    eventDate: today // Initialiser avec la date du jour
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    let errors = {};
    const nameRegex = /^[a-zA-Z\s]{3,20}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/;
    
    if (!formData.firstName.trim() || !nameRegex.test(formData.firstName.trim())) {
      errors.firstName = 'Le prénom est obligatoire, doit contenir entre 3 et 20 caractères, et ne doit contenir que des lettres.';
    }
    if (!formData.lastName.trim() || !nameRegex.test(formData.lastName.trim())) {
      errors.lastName = 'Le nom est obligatoire, doit contenir entre 3 et 20 caractères, et ne doit contenir que des lettres.';
    }
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = 'L\'email est obligatoire et doit être valide.';
    }
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      errors.phone = 'Le numéro de téléphone doit être valide et au format canadien.';
    }
    if (!formData.activity) {
      errors.activity = 'Vous devez choisir une activité.';
    }
    if (!formData.eventDate || formData.eventDate <= today) {
      errors.eventDate = 'La date de l\'événement doit être supérieure à la date d\'aujourd\'hui.';
    }
    
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      // Ici, vous pouvez gérer la soumission du formulaire, par exemple, envoyer les données à votre serveur
    }
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
          {errors.firstName && <label className={styles.error}>{errors.firstName}</label>}
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
          {errors.lastName && <label className={styles.error}>{errors.lastName}</label>}
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
          {errors.email && <label className={styles.error}>{errors.email}</label>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Téléphone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <label className={styles.error}>{errors.phone}</label>}
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
          {errors.activity && <label className={styles.error}>{errors.activity}</label>}
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
          {errors.eventDate && <label className={styles.error}>{errors.eventDate}</label>}
        </div>

        <button type="submit" className={styles.button}>S'inscrire</button>
      </form>
    </div>
  );
};

export default Inscription;
