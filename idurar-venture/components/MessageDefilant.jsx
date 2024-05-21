import styles from './MessageDefilant.module.css';


export default function MessageDefilant({ message }) {
    return <div className={styles.container}>
    <marquee className={styles.marquee}>{message}</marquee>
  </div>
}
