import styles from "./page.module.css";

export default function HeaderMenu() {
  return (
    <div>
      <header>
      <div className={styles.wrapper}>
        <nav className={styles.header__nav}>
          <ul className={styles.header__list}>
          <li className={styles.header__ypravlenie}></li>
            <div className={styles.header__item}>Главная</div>
            <li className={styles.header__ypravlenie}></li>
            <div className={styles.header__item}>О компании</div>
            <li className={styles.header__ypravlenie}></li>
            <div className={styles.header__item}>Проекты</div>
            <li className={styles.header__ypravlenie}></li>
            <div className={styles.header__item}>Новости</div>
            <li className={styles.header__ypravlenie}></li>
            <div className={styles.header__item}>Отзывы и сертификаты</div>
            <li className={styles.header__ypravlenie}></li>
            <div className={styles.header__item}>Контанкты</div>
          </ul>
        </nav>
      </div>
    </header>
    </div>
     );
    }