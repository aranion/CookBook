import styles from "./loader.module.scss";

export const Loader = () => {

  return (
    <div className={styles["loader__wrapper"]}>
      <div className={styles["loader__circle"]}></div>
      <div className={styles["loader__title"]}>Загрузка...</div>
    </div>
  );
};

