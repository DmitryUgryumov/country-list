"use client";

import styles from "@/styles/Error.module.scss";

const Error = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Что-то пошло не так!</h1>
        <p className={styles.message}>
          Произошла ошибка при загрузке данных о странах.
        </p>
      </div>
    </div>
  );
};

export default Error;
