"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./CountriesList.module.scss";
import { ICountry } from "@/types/types";
import clsx from "clsx";

interface IProps {
  countries: ICountry[];
}

const CountriesList = ({ countries: initialCountries }: IProps) => {
  const [countries, setCountries] = useState<ICountry[]>(initialCountries);
  const [deletingCodes, setDeletingCodes] = useState<Set<string>>(new Set());

  const handleDelete = (isoCode: string) => {
    setDeletingCodes((prev) => new Set(prev).add(isoCode));

    setTimeout(() => {
      setCountries((prev) =>
        prev.filter((country) => country.iso_code2 !== isoCode),
      );
      setDeletingCodes((prev) => {
        const newSet = new Set(prev);
        newSet.delete(isoCode);
        return newSet;
      });
    }, 300);
  };

  if (countries.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Список стран мира</h1>
          <p className={styles.subtitle}>Список стран пуст</p>
        </div>
        <div className={styles.emptyState}>
          <p>К сожалению, данные о странах не найдены.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Список стран мира</h1>
        <p className={styles.subtitle}>Всего стран: {countries.length}</p>
      </div>

      <div className={styles.countriesList}>
        {countries.map((country) => (
          <div
            key={country.iso_code2}
            className={clsx(styles.countryCard, {
              [styles.deleting]: deletingCodes.has(country.iso_code2),
            })}
          >
            <div className={styles.flagContainer}>
              {country.flag_url && (
                <Image
                  src={`https:${country.flag_url}`}
                  alt="Флаг"
                  width={22}
                  height={11}
                />
              )}
            </div>

            <div className={styles.countryInfo}>
              <h3>{country.name_ru}</h3>
            </div>

            <div className={styles.actions}>
              <Link
                href={`/country/${country.iso_code2}`}
                className={styles.detailsButton}
              >
                Подробнее
              </Link>

              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(country.iso_code2)}
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
