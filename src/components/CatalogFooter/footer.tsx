'use client';
import styles from "./footer.module.css";
import Image from "next/image";
export default function CatalogFooter() {
    return (
        <div className={styles.footer__list}>
        <div className={styles.footer__up}>
            <div className={styles.footer__column}>
                <div className={styles.footer__logo}>
                <Image src="Images/logotip.svg" width={116} height={24} alt="Not found" />
                </div>
                <div className={styles.footer__icon}>
                    <div className={styles.footer__fac}>
                        <Image src="Images/Facebook.svg" width={10} height={20} alt="Not found" />
                    </div>
                    <div className={styles.footer__inst}>
                        <Image src="Images/Instagram.svg" width={18} height={18} alt="Not found" />
                    </div>
                    <div className={styles.footer__tel}>
                        <Image src="Images/Shape.svg" width={20} height={18} alt="Not found" />
                    </div>
                    <div className={styles.footer__vk}>
                        <Image src="Images/VK.svg" width={20} height={12} alt="Not found" />
                    </div>
                </div>
            </div>
            <div className={styles.footer__column1}>
                <span className={styles.footer__item}>
                    Главная
                </span>
                <span className={styles.footer__item}>
                    О компании
                </span>
                <span className={styles.footer__item}>
                    Проекты
                </span>
            </div>
            <div className={styles.footer__column2}>
                <span className={styles.footer__item}>
                    Новости
                </span>
                <span className={styles.footer__item}>
                    Отзывы и сертификаты
                </span>
                <span className={styles.footer__item}>
                    Контакты
                </span>
            </div>
            <div className={styles.footer__column3}>
                <div className={styles.footer__des}>
                    <div className={styles.footer__img}>
                        <Image src="Images/mappoint.svg" width={13} height={17} alt="Not found" />
                    </div>
                    <span className={styles.footer__item}>
                        Москва
                    </span>
                </div>
                <div className={styles.footer__des}>
                    <div className={styles.footer__img}>
                        <Image src="Images/phone.svg" width={13} height={17} alt="Not found" />
                    </div>
                    <span className={styles.footer__item}>
                        +7 (900) 111-22-33
                    </span>
                </div>
                <div className={styles.footer__des}>
                    <div className={styles.footer__img}>
                        <Image src="Images/email.svg" width={13} height={17} alt="Not found" />
                    </div>
                    <span className={styles.footer__item}>
                        promair@mail.ru
                    </span>
                </div>
            </div>   
        </div>
        <div className={styles.footer__down}>
            <span className={styles.footer__company}>© ООО Promair</span>
            <span className={styles.footer__line}>Политика обработки персональных данных</span>
        </div>
    </div>
    );
}