// app/RightPanel.tsx
"use client";

import styles from "./RightPanel.module.css";

export default function RightPanel() {
  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>Notas</h3>
      <div className={styles.card}>
        <p>Marque tarefas no centro e veja o progresso no gráfico de pizza.</p>
      </div>
      <div className={styles.cardMuted}>
        <small>(Painel opcional no MVP; remova se quiser.)</small>
      </div>
    </div>
  );
}
