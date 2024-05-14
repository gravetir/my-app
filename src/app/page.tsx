import Footer from "../components/Footer/Footer";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import Main from "../components/Main/Main";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.header}>
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
