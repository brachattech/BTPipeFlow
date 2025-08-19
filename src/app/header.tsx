import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>BTPipeflow</div>
      <nav className={styles.nav}>
        <a href="/homepage" className={styles.link}>Home</a>
        <a href="/progress" className={styles.link}>Progresso</a>
      </nav>
    </header>
  );
}
