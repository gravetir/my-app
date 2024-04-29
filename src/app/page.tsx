import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu"
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <Header/>
        <HeaderMenu/>
      </div>
      <div className={styles.main}>
        <Main/>
      </div>
      {/* <div className={styles.footer__list}>
      <h1 className={styles.footer__item}>PROMAIR</h1>
      <div className={styles.header__kartinka}>
              <Image src="Images/Facebook.svg" width={10} height={20} alt="Not found" />
            </div>
            <div className={styles.header__kartinka}>
              <Image src="Images/Instagram.svg" width={18} height={18} alt="Not found" />
            </div>
            <div className={styles.header__kartinka}>
              <Image src="Images/Shape.svg" width={20} height={18} alt="Not found" />
            </div>
            <div className={styles.header__kartinka}>
              <Image src="Images/VK.svg" width={20} height={12} alt="Not found" />
            </div>
      <li className={styles.footer__ypravlenie}></li>
        <div className={styles.footer__item}>Главная</div>
      <li className={styles.footer__ypravlenie}></li>
        <div className={styles.footer__item}>О компании</div>
        <li className={styles.footer__ypravlenie}></li>
              <div className={styles.footer__item}>Проекты</div>
            <li className={styles.footer__ypravlenie}></li>
              <div className={styles.footer__item}>Новости</div>
            <li className={styles.footer__ypravlenie}></li>
              <div className={styles.footer__item}>Отзывы и сертификаты</div>
            <li className={styles.footer__ypravlenie}></li>
              <div className={styles.footer__item}>Контанкты</div>
              <div className={styles.header__kartinka}>
              <Image src="Images/mappoint.svg" width={13} height={17} alt="Not found" />
            </div>
                <div className={styles.header__item2}>Москва</div>
            <li className={styles.header__ypravlenie}></li>
            <div className={styles.header__kartinka1}>
              <Image src="Images/phone.svg" width={17} height={17} alt="Not found" />
            </div>
            <div className={styles.header__item2}>+7 (900) 111-22-33</div>
            <div className={styles.header__kartinka1}>
              <Image src="Images/email.svg" width={18} height={13} alt="Not found" />
            </div>
            <div className={styles.header__item2}>promair@mail.ru</div>
            <div className={styles.footer__item1}>© ООО Promair </div>
            <div className={styles.footer__item1}>Политика обработки персональных данных</div>

      </div> */} 
    <div className={styles.footer__wrapper}>
      <Footer/>
    </div>
    </div>

  );
}
