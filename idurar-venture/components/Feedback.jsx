import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import styles from './Feedback.module.css';

export default function Feedback() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    emailjs.send(
      'service_7g77wna',  // Service Id
      'template_n2nwb1h',  //Template Id
      data,
      'YyE6FsGhMmVmOxTkI' // User ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        reset(); // Réinitialise le formulaire après un envoi réussi
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  return (

    <div className={styles.container}>
      <p className={styles.subtitle}>Nous apprécions vos commentaires. Veuillez nous faire part de vos suggestions et impressions.</p>
      <br />

    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>Nom et Prénom :*</label>
        <input
          id="name"
          {...register('name', { 
            required: 'Ce champ est obligatoire',
            minLength: { value: 4, message: 'Minimum 4 caractères' },
            maxLength: { value: 50, message: 'Maximum 50 caractères' }
          })}
          className={styles.input}
        />
        {errors.name && <span className={styles.error}>{errors.name.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>E-mail: *</label>
        <input
          id="email"
          {...register('email', { 
            required: 'Ce champ est obligatoire',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Adresse e-mail invalide'
            }
          })}
          className={styles.input}
        />
        {errors.email && <span className={styles.error}>{errors.email.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="subject" className={styles.label}>Objet:</label>
        <input
          id="subject"
          {...register('subject', { 
            maxLength: { value: 100, message: 'Maximum 100 caractères' }
          })}
          className={styles.input}
        />
        {errors.subject && <span className={styles.error}>{errors.subject.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>Message: *</label>
        <textarea
          id="message"
          {...register('message', { 
            required: 'Ce champ est obligatoire',
            maxLength: { value: 1000, message: 'Maximum 1000 caractères' }
          })}
          className={styles.textarea}
          rows={8}
        ></textarea>
        {errors.message && <span className={styles.error}>{errors.message.message}</span>}
      </div>

      <button type="submit" className={styles.button}>Envoyer</button>
    </form>
    </div>
  );
}