"use client";

import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.wrap}>
      <h3 className={styles.logo}>BTPipeflow</h3>
      <nav className={styles.nav}>
        <a href="/homepage" className={styles.link}>Home</a>
        <a href="/shell" className={styles.link}>Shell</a>
      </nav>
      <button
        className={styles.newBtn}
        onClick={() => alert("Novo projeto em breve!")}
      >
        + Novo Projeto
      </button>
    </div>
  );
}
