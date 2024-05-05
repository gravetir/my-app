import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu"
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useState } from "react";


export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        {/* <Header/> */}
        <HeaderMenu/>
      </div>
      <div className={styles.main}>
        <Main/>
      </div>
      <div className={styles.footer__wrapper}>
        <Footer/>
      </div>
    </div>
  );
}
