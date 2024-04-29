'use client';
import styles from "./Main.module.css";
import Image from "next/image";

export default function Main() {
  return (
    <div className={styles.container}>
                    <div className={styles.leftColumn}>
                        {/* <div className={styles.wrapper}> */}
                        <div className={styles.main__columns}>
                                <h3 className={styles.main__ypravlenie}>
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
                                <h3 className={styles.main__ypravlenie}>
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
                                <h3 className={styles.main__ypravlenie}>
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
                                <h3 className={styles.main__ypravlenie}>
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

                                <div className={styles.main__rec}>
                                    <div className={styles.mainrec__design}>
                                        <Image src= "Images/design.svg" width={647} height={596} alt="Not found" />
                                    </div>
                                    <div className={styles.mainrec__left}>
                                        <span className={styles.mainrec__text1}>Продажа компрессоров</span>
                                        <span className={styles.mainrec__text2}>по ценам производителя</span>
                                        <span className={styles.mainrec__text3}>14 лет на рынке компрессорного</span>
                                        <span className={styles.mainrec__text4}>оборудования</span>
                                        <div className={styles.button__rec}>
                                            <span className={styles.buttontext__rec}>Перейти в каталог</span>
                                            <i className={styles.arrow__icon}><Image src= "Images/Arrow1.svg" width={16} height={16} alt="Not found" /></i>
                                        </div>
                                    </div>
                                    <div className={styles.mainrec__right}>
                                        <div className={styles.mainrec__img}>
                                            <Image src="Images/compressor.svg" width={177} height={180} alt="Not found" />
                                        </div>
                                        <span className={styles.mainrec__text5}>Поршневой компрессор</span>
                                        <span className={styles.mainrec__text5}>REMEZA СБ4/С-24.OLD15</span>
                                    </div>

                                </div>

                                <h2 className={styles.main__promo}>
                                    Новинки
                                </h2>
                                    <div className={styles.main__new}>
                                        <div className={styles.main__img}>
                                            <Image src="Images/Generator1.svg" width={186} height={156} alt="Not found" />
                                            <div className={styles.main__textimg}>Бензиновый генератом</div>
                                            <div className={styles.main__textimg}>RATO R8000ID</div>
                                            <button className={styles.main__button1}>
                                                <div className={styles.maintext__button1}>В корзину</div>
                                            </button>
                                        </div>
                                            <div className={styles.main__img}>
                                                <Image src="Images/Generator2.svg" width={186} height={156} alt="Not found" />
                                                <div className={styles.main__textimg}>Бензиновый генератом</div>
                                                <div className={styles.main__textimg}> RATO R3500I</div>
                                                <button className={styles.main__button2}>
                                                    <div className={styles.maintext__button2}>70 000 руб.</div>
                                                </button>
                                            </div>
                                        <div className={styles.main__img}>
                                            <Image src="Images/Generator3.svg" width={186} height={156} alt="Not found" />
                                            <div className={styles.main__textimg}>Бензиновый генератом</div>
                                            <div className={styles.main__textimg}>RATO R2500IS</div>
                                            <button className={styles.main__button2}>
                                                <div className={styles.maintext__button2}>70 000 руб.</div>
                                            </button>
                                        </div>
                                        <div className={styles.main__img}>
                                            <Image src="Images/Generator4.svg" width={186} height={156} alt="Not found" />
                                            <div className={styles.main__textimg}>Бензиновый генератом</div>
                                            <div className={styles.main__textimg}>RATO R6000E-L2</div>
                                            <button className={styles.main__button2}>
                                                <div className={styles.maintext__button2}>70 000 руб.</div>
                                            </button>
                                        </div>   
                                    </div>

                            <div className={styles.main__project}>
                                <h2 className={styles.main__text1}>Проекты</h2>
                                <button className={styles.main__button3}>Смотреть всё <Image src="Images/Arrow2.svg" width={14} height={14} alt="Not found" /></button>
                            </div>
                                <div className={styles.main__project1}>
                                    <i className={styles.left__arrow}><Image src="Images/Left.svg" width={7} height={12} alt="Not found" /></i>
                                    <div className={styles.main__img1}>
                                        <Image src="Images/project1.svg" width={255} height={208} alt="Not found" />
                                        <div className={styles.main__textimg1}>Поставка МКС для Стойленского</div>
                                        <div className={styles.main__textimg1}>ГОК</div>
                                    </div> 
                                    <div className={styles.main__img1}>
                                        <Image src="Images/project2.svg" width={255} height={208} alt="Not found" />
                                        <div className={styles.main__textimg1}>Спецзаказ для конструкторского</div>
                                        <div className={styles.main__textimg1}>бюро машиностроения в</div>
                                        <div className={styles.main__textimg1}>Коломне</div>
                                    </div>
                                    <div className={styles.main__img1}>
                                        <Image src="Images/project3.svg" width={255} height={208} alt="Not found" />
                                        <div className={styles.main__textimg1}>Инженерное решение для</div>
                                        <div className={styles.main__textimg1}>торгового дома «Албес»</div>
                                    </div>
                                    <i className={styles.left__arrow}><Image src="Images/Right.svg" width={7} height={12} alt="Not found" /></i> 
                                </div>    

                            <div className={styles.main__review}>
                                <h2 className={styles.main__text2}>Отзывы и сертификаты</h2>
                                <button className={styles.main__button3}>Смотреть всё <Image src="Images/Arrow2.svg" width={14} height={14} alt="Not found" /></button>
                            </div>
                                <div className={styles.main__review1}>
                                    <i className={styles.left__arrow}><Image src="Images/Left.svg" width={7} height={12} alt="Not found" /></i>
                                    <div className={styles.main__img2}>
                                    <Image src="Images/serf1.svg" width={117} height={165} alt="Not found" />
                                    </div>
                                    <div className={styles.main__img2}>
                                    <Image src="Images/serf2.svg" width={117} height={165} alt="Not found" />
                                    </div>
                                    <div className={styles.main__img2}>
                                    <Image src="Images/serf3.svg" width={117} height={165} alt="Not found" />
                                    </div>
                                    <div className={styles.main__img2}>
                                    <Image src="Images/serf4.svg" width={117} height={165} alt="Not found" />
                                    </div>
                                    <div className={styles.main__img2}>
                                    <Image src="Images/serf5.svg" width={117} height={165} alt="Not found" />
                                    </div>
                                    <div className={styles.main__img2}>
                                    <Image src="Images/serf6.svg" width={117} height={165} alt="Not found" />
                                    </div>
                                    <i className={styles.right__arrow}><Image src="Images/Right.svg" width={7} height={12} alt="Not found" /></i>
                                </div>    
                            
                            
                            <div className={styles.main__news}>
                                <h2 className={styles.main__text3}>Новости</h2>
                                <button className={styles.main__button3}>Смотреть всё <Image src="Images/Arrow2.svg" width={14} height={14} alt="Not found" /></button>
                            </div>
                                    <div className={styles.main__news1}>
                                        <i className={styles.left__arrow}><Image src="Images/Left.svg" width={7} height={12} alt="Not found" /></i>
                                        <div className={styles.main__img3}>
                                            <Image src="Images/news1.svg" width={247} height={174} alt="Not found" />
                                            <div className={styles.mainnews__columns}>Каталог пополнился</div>
                                            <div className={styles.mainnews__columns}>продукцией для</div>
                                            <div className={styles.mainnews__columns}>воздухоподготовки</div>
                                            <div className={styles.mainnews__columns}>ARIACOM</div>
                                            <div className={styles.mainnews__columns1}>Продукция итальянской компании ARIACOM </div>
                                            <div className={styles.main__down}>
                                                <div className={styles.mainnews__columns2}>Читать далее</div>
                                                <div className={styles.mainnews__columns3}>20.01.2022</div>
                                            </div>
                                        </div>
                                        <div className={styles.main__img3}>
                                            <Image src="Images/news2.svg" width={247} height={174} alt="Not found" />
                                            <div className={styles.mainnews__columns}>Расширен выбор спиральных компрессоров Remeza</div>
                                            <div className={styles.mainnews__columns}>спиральных</div>
                                            <div className={styles.mainnews__columns}>компрессоров Remeza</div>
                                            <div className={styles.mainnews__columns1}>Добавлены новинки в ассортимент производителя Remeza.</div>
                                            <div className={styles.main__down}>
                                                <div className={styles.mainnews__columns2}>Читать далее</div>
                                                <div className={styles.mainnews__columns3}>23.08.2021</div>
                                            </div>    
                                        </div>
                                        <div className={styles.main__img3}>
                                            <Image src="Images/news3.svg" width={247} height={174} alt="Not found" />
                                            <div className={styles.mainnews__columns}>Пополнен ассортимент компрессоров Atmos</div>
                                            <div className={styles.mainnews__columns}>компрессоров Atmos</div>
                                            <div className={styles.mainnews__columns1}>Добавлены новинки в ассортимент производителя Remeza. </div>
                                            <div className={styles.main__down}>
                                                <div className={styles.mainnews__columns2}>Читать далее</div>
                                                <div className={styles.mainnews__columns3}>5.02.2022</div>
                                            </div>    
                                        </div>
                                        <i className={styles.left__arrow}><Image src="Images/Right.svg" width={7} height={12} alt="Not found" /></i>
                                    </div>
                        
                        </div>
        </div>
    // </div>
    );
}