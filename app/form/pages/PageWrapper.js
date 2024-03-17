import styles from "../form.module.css";

export function PageWrapper({ title, children }) {
  return (
    <>
      <h2 className={styles.page_title}>{title}</h2>
      <div className={styles.page_container}>{children}</div>
    </>
  );
}
