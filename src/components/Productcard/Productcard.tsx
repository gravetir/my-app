import Image from "next/image";
import { useState } from 'react';

import styles from './Productcard.module.css';

export default function ProductCard() {

    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
            <Image src="Images/head.svg" width={254} height={178} alt="Not found" />
            </div>

            <div className={styles.cardDesc}>
                <span className={styles.cardDesctitle}>Поршневой компрессор REMEZA СБ4/С-24.OLD15</span>
                <span className={styles.cardDescdriveunit}>Тип привода: Прямой</span>

                <span className={styles.cardDesctypeengine}>Тип двигателя: Электрический</span>
                <span className={styles.cardDescworkvoltage}>Рабочее напряжение: 220 В</span>

                <button className={styles.cardDescBuy}>41 189 ₽</button>

            </div>
        </div>
    );
}