'use client';
import { useState } from "react";
import styles from "./HeaderMenu.module.css";
import Image from "next/image";
import cn from "clsx";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function HeaderMenu() {
  const [isActive, setIsActive] = useState(false)
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
            {/* {session?.data && <Link href="/profile">Profile</Link>}
                {session?.data ? (
                <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>
                  Sign Out
                </Link>
              ) : (
                <Link href="/signin">SignIn</Link>
              )} */}
                <div className="bg-gradient-to-b from-cyan-50 to-cyan-200 p-2 flex gap-5 ">
                <div className="ml-auto flex gap-2">
                  {/* {session?.user ? (
                    <>
                      <p className="text-sky-600"> {session.user.username}</p>
                      <button className="text-red-500" onClick={() => signOut()}>
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <button className="text-green-600" onClick={() => signIn()}>
                      Sign In
                    </button>
                  )} */}
                </div>
              </div>
          </ul>
        </nav>


    </header>
     );
    }