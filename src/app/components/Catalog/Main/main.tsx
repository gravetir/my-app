'use client';
import styles from "./Main.module.css";
import Image from "next/image";

export default function Main() {
  return (
    <div className={styles.container}>
                    <div className={styles.leftColumn}>
                        {/* <div className={styles.wrapper}> */}
                        <div className={styles.main__columns}>
                                <h3 className={styles.main__ypravlenie1}>
                                Компрессоры
                                </h3>
                                <span className={styles.main__ypravlenie}>
                                Винтовые комрессоры
                                </span>
                                <span className={styles.main__ypravlenie}>
                                Передвижные комрессоры
                                </span>
                                <span className={styles.main__ypravlenie}>
                                Поршневые комрессоры
                                </span>
                                <span className={styles.main__ypravlenie}>
                                Спиральные компрессоры
                                </span>
                                <span className={styles.main__ypravlenie}>
                                Дожимные комрессоры
                                </span>
                                <span className={styles.main__ypravlenie}>
                                Модульные станции
                                </span> 
                                <span className={styles.main__ypravlenie}>
                                Компрессоры Б/У
                                </span>
                                <h3 className={styles.main__ypravlenie1}>
                                Подготовка и хранение сжатого воздуха
                                </h3>
                                <span className={styles.main__ypravlenie}>
                                Осушители воздуха
                                </span>
                                <span className={styles.main__ypravlenie}>
                                Ресиверы
                                </span>
                                <span className={styles.main__ypravlenie}>
                                Магистральные фильтры
                                </span>
                                <span className={styles.main__ypravlenie}>
                                Кольцевые  охладители
                                </span>
                                <span className={styles.main__ypravlenie}>
                                Сепораторы
                                </span>
                                <h3 className={styles.main__ypravlenie1}>
                                Компрессоры
                                </h3>
                                <span className={styles.main__ypravlenie}>
                                Винтовые комрессоры
                                </span>
                                <span className={styles.main__ypravlenie}>
                                Передвижные комрессоры
                                </span>
                                <span className={styles.main__ypravlenie}>
                                Поршневые комрессоры
                                </span>
                                <span className={styles.main__ypravlenie}>
                                Спиральные компрессоры
                                </span>
                                <span className={styles.main__ypravlenie}>
                                Дожимные комрессоры
                                </span>
                                <span className={styles.main__ypravlenie}>
                                Модульные станции
                                </span> 
                                <span className={styles.main__ypravlenie}>
                                Компрессоры Б/У
                                </span>
                                <h3 className={styles.main__ypravlenie1}>
                                Подготовка и хранение сжатого воздуха
                                </h3>
                                <span className={styles.main__ypravlenie}>
                                Осушители воздуха
                                </span>
                                <span className={styles.main__ypravlenie}>
                                Ресиверы
                                </span>
                                <span className={styles.main__ypravlenie}>
                                Магистральные фильтры
                                </span>
                                <span className={styles.main__ypravlenie}>
                                Кольцевые  охладители
                                </span>
                                <span className={styles.main__ypravlenie}>
                                Сепораторы
                                </span>
                        </div>           
                                
                                <div className={styles.leftimg__column}>
                                    <h4>Сертификаты</h4>
                                    <i className={styles.arrow__icon1}><Image src="Images/Arrow2.svg" width={14} height={14} alt="Not found" /></i>
                                </div>
                                <div className={styles.left__column}>
                                    <div className={styles.main__img2}>
                                        <Image src="Images/serf1.svg" width={92} height={128} alt="Not found" />
                                    </div>
                                    <div className={styles.main__img2}>
                                    <Image src="Images/serf2.svg" width={92} height={128} alt="Not found" />
                                    </div>  
                                </div>
                                <div className={styles.arrowblue}>
                                    <div className={styles.arrowblue1}>
                                    <Image src="Images/Leftbig.svg" width={24} height={24} alt="Not found" />
                                    </div>
                                    <div>
                                    <Image src="Images/Rightbig.svg" width={24} height={24} alt="Not found" />
                                    </div>
                                </div>    

                                <div className={styles.leftimg__column}>
                                    <h4>Вакансии</h4>
                                    <i className={styles.arrow__icon1}><Image src="Images/Arrow2.svg" width={14} height={14} alt="Not found" /></i>
                                </div>
                                <div className={styles.main__img2}>
                                    <Image src="Images/engine.svg" width={200} height={101} alt="Not found" />
                                    <div>Инженер по сборке</div>
                                </div>
                                <div className={styles.arrowblue}>
                                    <div className={styles.arrowblue1}>
                                    <Image src="Images/Leftbig.svg" width={24} height={24} alt="Not found" />
                                    </div>
                                    <div>
                                    <Image src="Images/Rightbig.svg" width={24} height={24} alt="Not found" />
                                    </div>
                                </div>    

                                <div className={styles.leftimg__column}>
                                    <h4>Доставка</h4>
                                    <i className={styles.arrow__icon1}><Image src="Images/Arrow2.svg" width={14} height={14} alt="Not found" /></i>
                                </div>    
                                <div className={styles.main__img2}>
                                <Image src="Images/delivery.svg" width={200} height={128} alt="Not found" />
                                </div>
                                <div className={styles.arrowblue}>
                                    <div className={styles.arrowblue1}>
                                    <Image src="Images/Leftbig.svg" width={24} height={24} alt="Not found" />
                                    </div>
                                    <div>
                                    <Image src="Images/Rightbig.svg" width={24} height={24} alt="Not found" />
                                    </div>
                                </div>    
                        </div>
                        <div className={styles.rightColumn}>
                                <input
                                                className={styles.main__search}
                                                placeholder='Поиск'
                                                type='search'
                                            />
                                <button className={styles.main__button}>
                                    <div className={styles.maintext__button}>Заказать звонок</div>
                                </button>
                        </div>

    </div>
    );
}