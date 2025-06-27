"use client";

import { useRouter } from "next/navigation";
import styles from "./BackButton.module.scss";
import { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const BackButton = ({ children = "← Назад" }: IProps) => {
  const router = useRouter();

  return (
    <button onClick={router.back} className={styles.backLink}>
      {children}
    </button>
  );
};

export default BackButton;
