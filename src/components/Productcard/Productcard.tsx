import Image from "next/image";
import { useState } from 'react';

import styles from './Productcard.module.css';
import { Product } from "@/types/product";

export default function ProductCard(props: Product)
 {

    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
            <img src={`http://178.154.206.159:8888/api/product/image/${props.image}`} alt="Not found" />
            </div>

            <div className={styles.cardDesc}>
                <span className={styles.cardDesctitle}>{props.title}</span>
                <span className={styles.cardDescdriveunit}>{props.driveUnit}</span>

                <span className={styles.cardDesctypeengine}>{props.typeEngine}</span>
                <span className={styles.cardDescworkvoltage}>{props.workVoltage}</span>

                <div className={styles.cardprice}>
                <button className={styles.cardDescBuy}>{props.price}{props.currency}</button>
                </div>

            </div>
        </div>
    );
}