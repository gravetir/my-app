import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <header>
      <div className={styles.wrapper}>
        <nav className={styles.header__nav}>
          <ul className={styles.header__list}>
            <h1 className={styles.header__item1}>PROMAIR</h1>
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
              <div className={styles.header__kartinka}>
              <Image src="Images/mappoint.svg" width={13} height={17} alt="Not found" />
            </div>
                <div className={styles.header__item2}>Москва</div>
            <li className={styles.header__ypravlenie}></li>
            <div className={styles.header__kartinka1}>
              <Image src="Images/phone.svg" width={17} height={17} alt="Not found" />
            </div>
            <div className={styles.header__item2}>+7 (900) 111-22-33</div>
          </ul>
        </nav>
      </div>
    </header><main>

      </main><footer>

      </footer>
      </div>
  );
}
