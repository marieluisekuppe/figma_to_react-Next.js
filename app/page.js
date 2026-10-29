import PillModal from "@/components/PillModal";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Components</h1>

      <div className={styles.pillSection}>
        <PillModal />
      </div>
    </main>
  );
}
