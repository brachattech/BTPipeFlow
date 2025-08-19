// app/layout.tsx
import styles from "./layout.module.css";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./Sidebar";
import RightPanel from "./RightPanel";

export const metadata = {
  title: "BTPipeflow",
  description: "Controle do fluxo de projetos com gráfico de pizza",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <div className={styles.shell}>
          <aside className={styles.left}>
            <Sidebar />
          </aside>
          <main className={styles.center}>{children}</main>
          <aside className={styles.right}>
            <RightPanel />
          </aside>
        </div>
        <Footer />
      </body>
    </html>
  );
}

