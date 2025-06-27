import Image from "next/image";
import styles from "./CountryCard.module.scss";
import { ICountry } from "@/types/types";

interface IProps {
  country: ICountry;
}

const CountryCard = ({ country }: IProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.header}>
          <h1>{country.name_ru}</h1>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.infoSection}>
          <div className={styles.infoCard}>
            <h2>Информация о стране</h2>

            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.label}>Название:</span>
                <span className={styles.value}>{country.name_ru}</span>
              </div>

              {country.flag_url && (
                <div className={styles.infoItem}>
                  <span className={styles.label}>Флаг:</span>
                  <div className={styles.flagContainer}>
                    <Image
                      src={`https:${country.flag_url}`}
                      alt="Флаг"
                      width={22}
                      height={11}
                      className={styles.flag}
                    />
                  </div>
                </div>
              )}

              <div className={styles.infoItem}>
                <span className={styles.label}>ISO 2:</span>
                <span className={styles.code}>{country.iso_code2}</span>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.label}>ISO 3:</span>
                <span className={styles.code}>{country.iso_code3}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
