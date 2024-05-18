import Image from "next/image";
import { useState } from 'react';

import styles from './CatalogCard.module.css';
import { Category } from "@/types/category";

export default function CategoryCard(props: Category)
 {

    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
            <img src={`http://localhost:8888/api/category/image/${props.image}`} alt="Not found" />
            </div>

            <div className={styles.cardDesc}>
                <span className={styles.cardDescname}>{props.name}</span>
                <span className={styles.cardDescdescription}>{props.description}</span>

            </div>
        </div>
    );
}