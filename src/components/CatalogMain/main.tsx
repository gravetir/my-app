'use client';
import styles from "./main.module.css";
import Image from "next/image";
import Link from "next/link";
import clsx from 'clsx';
import { useCategoriesQuery } from "@/hooks/useCategoryQuery";
import { useState } from "react";
import CategoryCard from "../CatalogCard/CatalogCard";

export default function CatalogMain() {
    const [state, setState] = useState(0);
    const [categoryId, setCategoryId] = useState(0);
    // const baseUrl = 'http://localhost:8888';
    // const imagePathFromBackend = '/api/category/image/';
    // const defaultImageName = 'default.jpg';
    // const imageUrl =`http://localhost:8888/api/category/image/${category}`;
    // const imageUrl ="http://localhost:8888/api/category/image/kompressor.png";


    const {data, isLoading, isSuccess} = useCategoriesQuery();
    // console.log(data)
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
            <div className={styles.search}>
                <input
                    className={styles.main__search}
                    placeholder='Поиск'
                    type='search'
                />
                    <button className={styles.main__button}>
                        <div className={styles.maintext__button}>Заказать звонок</div>
                    </button>
            </div>
                    <div className={styles.backtohome}>
                        <span className={styles.links}><Link href="/">Главная</Link></span>
                        <Link href="/Product" className={styles.product}>Компрессоры</Link>
                    </div>
                    <h2 className={styles.head}>Каталог</h2>
                    {/* <button onClick={() => setState(state - 1)}>-</button>
                    <div>{state}</div>
                    <button onClick={() => setState(state + 1)}>+</button> */}
                    <ul className={styles.catalogCategory}>
                    {/* <li
                        className={clsx(styles.catalogCategoryItem, categoryId === 0 && styles.active)}
                        onClick={() => setCategoryId(0)}
                    >Все</li> */}
                    {/* {data?.map(category => (
                        <li
                            key={category.id}
                            className={clsx(styles.catalogCategoryItem, categoryId === category.id && styles.active)}
                            onClick={() => setCategoryId(category.id)}
                        >
                           <img src={`http://localhost:8888/api/category/image/${category.image}`} alt="Not found" />
                           <div className={styles.title}>{category.name}</div>
                            <div className={styles.descript}>{category.description}</div>
                        </li>
                       
                    ))} */}
                    <div className={styles.catalogGrid}>
                        {data?.map(category => (
                            <CategoryCard {...category} key={category.id} />
                        ))}
                    </div>
                </ul>
        </div>

    </div>
    );
}