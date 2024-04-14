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
    </header>
    <main>
    <div className={styles.main__nav}>
					<div className={styles.wrapper}>
						<div className={styles.main__list}>
            <input
							  className={styles.main__search}
							  placeholder='Поиск'
							  type='search'
						    />
                <button className={styles.main__button}>
                  <div className={styles.maintext__button}>Заказать звонок</div>
                </button>
              <h2 className={styles.main__ypravlenie}>
                Компрессоры
              </h2>
              <li className={styles.main__ypravlenie}>
                Винтовые комрессоры
                </li>
                <li className={styles.main__ypravlenie}>
                Передвижные комрессоры
                </li>
                <li className={styles.main__ypravlenie}>
                Поршневые комрессоры
                </li>
                <li className={styles.main__ypravlenie}>
                Спиральные компрессоры
                </li>
                <li className={styles.main__ypravlenie}>
                Дожимные комрессоры
                </li>
                <li className={styles.main__ypravlenie}>
                Модульные станции
                </li> 
                <li className={styles.main__ypravlenie}>
                Компрессоры Б/У
                </li>
                <h2 className={styles.main__ypravlenie}>
                Подготовка и хранение сжатого воздуха
                </h2>
                <li className={styles.main__ypravlenie}>
                Осушители воздуха
                </li>
                <li className={styles.main__ypravlenie}>
                Ресиверы
                </li>
                <li className={styles.main__ypravlenie}>
                Магистральные фильтры
                </li>
                <li className={styles.main__ypravlenie}>
                Кольцевые  охладители
                </li>
                <li className={styles.main__ypravlenie}>
                Сепораторы
                </li>
                <h2 className={styles.main__ypravlenie}>
                Компрессоры
              </h2>
              <li className={styles.main__ypravlenie}>
                Винтовые комрессоры
                </li>
                <li className={styles.main__ypravlenie}>
                Передвижные комрессоры
                </li>
                <li className={styles.main__ypravlenie}>
                Поршневые комрессоры
                </li>
                <li className={styles.main__ypravlenie}>
                Спиральные компрессоры
                </li>
                <li className={styles.main__ypravlenie}>
                Дожимные комрессоры
                </li>
                <li className={styles.main__ypravlenie}>
                Модульные станции
                </li> 
                <li className={styles.main__ypravlenie}>
                Компрессоры Б/У
                </li>
                <h2 className={styles.main__ypravlenie}>
                Подготовка и хранение сжатого воздуха
                </h2>
                <li className={styles.main__ypravlenie}>
                Осушители воздуха
                </li>
                <li className={styles.main__ypravlenie}>
                Ресиверы
                </li>
                <li className={styles.main__ypravlenie}>
                Магистральные фильтры
                </li>
                <li className={styles.main__ypravlenie}>
                Кольцевые  охладители
                </li>
                <li className={styles.main__ypravlenie}>
                Сепораторы
                </li>


                <h4>Сертификаты</h4>
                <div className={styles.main__kartinka2}>
             <Image src="Images/serf1.svg" width={92} height={128} alt="Not found" />
             </div>
             <div className={styles.main__kartinka2}>
             <Image src="Images/serf2.svg" width={92} height={128} alt="Not found" />
             </div>

             <h4>Вакансии</h4>
             <div className={styles.main__kartinka4}>
             <Image src="Images/engine.svg" width={200} height={101} alt="Not found" />
             <div>Инженер по сборке</div>
             </div>

             <h4>Доставка</h4>
             <div className={styles.main__kartinka4}>
             <Image src="Images/deliver.svg" width={200} height={128} alt="Not found" />
             </div>


                <h2 className={styles.main__promo}>
                    Новинки
                </h2>
                <div className={styles.main__kartinka}>
              <Image src="Images/Generator1.svg" width={186} height={156} alt="Not found" />
              <div className={styles.main__textkartinka}>Бензиновый генератом RATO R8000ID</div>
              <button className={styles.main__button}>
                  <div className={styles.maintext__button}>В корзину</div>
                </button>
            </div>
            <div className={styles.main__kartinka}>
              <Image src="Images/Generator2.svg" width={186} height={156} alt="Not found" />
              <div className={styles.main__textkartinka}>Бензиновый генератом RATO R3500I</div>
              <button className={styles.main__button}>
                  <div className={styles.maintext__button}>70 000 руб.</div>
                </button>
            </div>
            <div className={styles.main__kartinka}>
              <Image src="Images/Generator3.svg" width={186} height={156} alt="Not found" />
              <div className={styles.main__textkartinka}>Бензиновый генератом RATO R2500IS</div>
              <button className={styles.main__button}>
                  <div className={styles.maintext__button}>70 000 руб.</div>
                </button>
            </div>
            <div className={styles.main__kartinka}>
              <Image src="Images/Generator4.svg" width={186} height={156} alt="Not found" />
              <div className={styles.main__textkartinka}>Бензиновый генератом RATO R6000E-L2</div>
              <button className={styles.main__button}>
                  <div className={styles.maintext__button}>70 000 руб.</div>
                </button>
            </div>


            <h2>Проекты</h2>
            <button className={styles.main__button1}>Смотреть всё</button>
            <div className={styles.main__kartinka1}>
              <Image src="Images/project1.svg" width={255} height={208} alt="Not found" />
              <div className={styles.main__textkartinka1}>Поставка МКС для Стойленского ГОК</div>
             </div> 
             <div className={styles.main__kartinka1}>
              <Image src="Images/project2.svg" width={255} height={208} alt="Not found" />
              <div className={styles.main__textkartinka1}>Спецзаказ для конструкторского бюро машиностроения в Коломне</div>
             </div>
             <div className={styles.main__kartinka1}>
              <Image src="Images/project3.svg" width={255} height={208} alt="Not found" />
              <div className={styles.main__textkartinka1}>Инженерное решение для торгового дома «Албес»</div>
             </div>


             <h2>Отзывы и сертификаты</h2>
             <button className={styles.main__button1}>Смотреть всё</button>
             <div className={styles.main__kartinka2}>
             <Image src="Images/serf1.svg" width={117} height={165} alt="Not found" />
             </div>
             <div className={styles.main__kartinka2}>
             <Image src="Images/serf2.svg" width={117} height={165} alt="Not found" />
             </div>
             <div className={styles.main__kartinka2}>
             <Image src="Images/serf3.svg" width={117} height={165} alt="Not found" />
             </div>
             <div className={styles.main__kartinka2}>
             <Image src="Images/serf4.svg" width={117} height={165} alt="Not found" />
             </div>
             <div className={styles.main__kartinka2}>
             <Image src="Images/serf5.svg" width={117} height={165} alt="Not found" />
             </div>
             <div className={styles.main__kartinka2}>
             <Image src="Images/serf6.svg" width={117} height={165} alt="Not found" />
             </div>
             
             <h2>Новости</h2>
             <button className={styles.main__button1}>Смотреть всё</button>
             <div className={styles.main__kartinka3}>
             <Image src="Images/news1.svg" width={247} height={174} alt="Not found" />
             </div>
             <div>Каталог пополнился продукцией для воздухоподготовки ARIACOM</div>
             <div>Продукция итальянской компании ARIACOM </div>
             <div>Читать далее</div>
             <div>20.01.2022</div>
             <div className={styles.main__kartinka3}>
             <Image src="Images/news2.svg" width={247} height={174} alt="Not found" />
             </div>
             <div>Расширен выбор спиральных компрессоров Remeza</div>
             <div>Добавлены новинки в ассортимент производителя Remeza. </div>
             <div>Читать далее</div>
             <div>23.08.2021</div>
             <div className={styles.main__kartinka3}>
             <Image src="Images/news3.svg" width={247} height={174} alt="Not found" />
             </div>
             <div>Пополнен ассортимент компрессоров Atmos</div>
             <div>Добавлены новинки в ассортимент производителя Remeza. </div>
             <div>Читать далее</div>
             <div>5.02.2022</div>
               
      </div>
      </div>
      </div>
      </main>
      <footer>

      </footer>
      </div>
  );
}
