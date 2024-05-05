'use client';
import styles from './header.module.css';
import Link from 'next/link';
import Image from "next/image";

export default function Header() {
  return (
    <div className={styles.header__img}>
      <Image src="Images/logotip.svg" width={116} height={24} alt="Not found" />
  </div>
);
}