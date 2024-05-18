'use client';
import styles from "./Productmain.module.css";
import Image from "next/image";
import Link from "next/link";
import clsx from 'clsx';
import { useProductsQuery } from "@/hooks/useProductQuery";
import { useState } from "react";
import ProductCard from "../Productcard/Productcard";

export default function ProductMain() {
    const [state, setState] = useState(0);
    const [productId, setProductId] = useState(0);
    const imageUrl ="http://localhost:8888/api/product/image/head1.png";


    const {data, isLoading, isSuccess} = useProductsQuery();
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
            {/* <div className={styles.search}> */}
                <input
                    className={styles.main__search}
                    placeholder='Поиск'
                    type='search'
                />
                    <button className={styles.main__button}>
                        <div className={styles.maintext__button}>Заказать звонок</div>
                    </button>
            {/* </div> */}
                    <div className={styles.backtocatalog}>
                        <Link href="/Catalog">Каталог</Link>
                    </div>
                    <h2 className={styles.head}>Компрессоры</h2>
                    {/* <button onClick={() => setState(state - 1)}>-</button>
                    <div>{state}</div>
                    <button onClick={() => setState(state + 1)}>+</button> */}
                     <ul className={styles.catalogProduct}>
                    {/* <li
                        className={clsx(styles.catalogProductItem, productId === 0 && styles.active)}
                        onClick={() => setProductId(0)}
                    >Все</li> */}
                    {/* {data?.map(product => (
                        <li
                            key={product.id}
                            className={clsx(styles.catalogProductItem, productId === product.id && styles.active)}
                            onClick={() => setProductId(product.id)}
                        >
                            <img src={imageUrl} alt="Not found" />
                            <div className={styles.title}>{product.title}</div> 
                            <div>{product.driveUnit}</div> 
                            <div>{product.typeEngine}</div> 
                            <div>{product.workVoltage}</div> 
                            <button className={styles.buttonprice}>{product.price}
                            {product.currency}
                            </button>
                        </li>
                       
                    ))} */}
                    
                    <div className={styles.catalogGrid}>
                        {data?.map(product => (
                            <ProductCard {...product} key={product.id} />
                        ))}
                    </div>
                    
                </ul>
                <div className={styles.numeration}>
                <i className={styles.left__arrow}><Image src="Images/Left.svg" width={7} height={12} alt="Not found" /></i>
                    <Image src="Images/Num 1.svg" width={100} height={90} alt="Not found" />
                    <i className={styles.number}><Image src="Images/Num 2.svg" width={35} height={35} alt="Not found" /></i>
                    <i className={styles.number}><Image src="Images/Num 3.svg" width={35} height={35} alt="Not found" /></i>
                    <span className={styles.textnumeration}>...</span>
                    <i className={styles.number}><Image src="Images/Num 4.svg" width={45} height={35} alt="Not found" /></i>
                    <i className={styles.number}><Image src="Images/Num 5.svg" width={45} height={35} alt="Not found" /></i>
                    <i className={styles.number}><Image src="Images/Num 6.svg" width={45} height={35} alt="Not found" /></i>
                <i className={styles.right__arrow}><Image src="Images/Right.svg" width={7} height={12} alt="Not found" /></i> 

                </div>
                {/* <div className={styles.catalogGrid}>
                    <ProductCard />
                    <ProductCard  />
                    <ProductCard  />
                    <ProductCard  />
                    <ProductCard  />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div> */}
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
                                <i className={styles.right__arrow}><Image src="Images/Right.svg" width={7} height={12} alt="Not found" /></i> 
                    </div>    
        </div>

    </div>
    );
}