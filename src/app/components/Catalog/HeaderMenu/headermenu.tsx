'use client';
import { useState } from "react";
import styles from "./HeaderMenu.module.css";
import Image from "next/image";

export default function HeaderMenu() {
  const [isActive, setIsActive] = useState(false)
  return (
    <nav className={styles.headerNav}>
          <ul className={styles.header__list}>
            <li className={styles.header__item1}>Главная</li>
            <li className={styles.header__item}>О компании</li>
            <li className={styles.header__item}>Проекты</li>
            <li className={styles.header__item}>Новости</li>
            <li className={styles.header__item}>Отзывы и сертификаты</li>
            <li className={styles.header__item}>Контанкты</li>
            <li className={styles.header__img}>
              <Image src="Images/mappoint.svg" width={13} height={17} alt="Not found" />
            </li>
            <li className={styles.header__item2}>Москва</li>
            <div className={styles.header__img1}>
              <Image src="Images/phone.svg" width={17} height={17} alt="Not found" />
            </div>
            <li className={styles.header__item}>+7 (900) 111-22-33</li>
            <div className={styles.burger}
            onClick={() =>
              {
                if (isActive == true){
                setIsActive(false);}
                else if (isActive == false){
                  setIsActive(true);
                }
              }
            }>
                <span></span>
            </div>
          </ul>

    </nav>
     );
    }