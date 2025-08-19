import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        © {new Date().getFullYear()} BTPipeflow — Controle do fluxo de projetos
      </p>
    </footer>
  );
}
