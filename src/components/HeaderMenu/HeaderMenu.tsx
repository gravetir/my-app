'use client';
import { useState } from "react";
import styles from "./HeaderMenu.module.css";
import Image from "next/image";
import cn from "clsx";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function HeaderMenu() {
  const [isActive, setIsActive] = useState(false)
  const handleLogout = () => {
    // Удалить токен из localStorage
    
    let token = null
    if (global?.window !== undefined) {
      // Now it's safe to access window and localStorage
      localStorage.removeItem('token'); }
      token = localStorage.getItem('token')
    }  


  // const { data: session } = useSession();
  // console.log({session})
  return (
    <header className={styles.header__menu}>
          <div className={styles.header__img}>
            <Image src="Images/logotip.svg" width={116} height={24} alt="Not found" />
          </div>
             <div
          className={styles.burger}
          onClick={() => {
            if (isActive == true) {
              setIsActive(false);
            } else if (isActive == false) {
              setIsActive(true);
            }
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={cn(styles.headerNav, { [styles.active]: isActive })}>
          <ul className={styles.headermenu__columns}>
            <div className={styles.cross} onClick={() => setIsActive(false)}>X</div>
            <li className={styles.header__item}>
              Главная
            </li>
            <li className={styles.header__item}>
              О компании
            </li>
            <li className={styles.header__item}>
              Проекты
            </li>
            <li className={styles.header__item}>
              Новости
            </li>
            <li className={styles.header__item}>
              Отзывы и сертификаты
            </li>
            <li className={styles.header__item}>
              Контанкты
            </li>
            <div className={styles.header__icons}>
              <li className={styles.header__img}>
                <Image src="Images/mappoint.svg" width={13} height={17} alt="Not found" />
              </li>
              <li className={styles.header__item}>Москва</li>
            </div>
            <div className={styles.header__icons}>
              <div className={styles.header__img}>
                <Image src="/Images/Phone.svg" width={17} height={17} alt="Not found" />
              </div>
              <li className={styles.header__item}>+7 (900) 111-22-33</li>
            </div>
                <div className={styles.reg}>
                <Link href="/register">SignIn</Link>
                {/* <Link href="/" onClick={handleLogout}>{token?"signout":"user"}</Link> */}
                <Link href="/login">Login</Link>
                </div>
          </ul>
        </nav>


    </header>
     );
    }