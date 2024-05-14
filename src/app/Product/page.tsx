import styles from "./page.module.css";
import ProductHeaderMenu from "@/components/ProductHeader/Producthead";
import ProductMain from "@/components/ProductMain/Productmain";
import ProductFooter from "@/components/ProductFooter/Productfooter";
import ReactQueryProvider from "@/providers/react-query";

export default function Product() {
    return (
        <div>
            <ReactQueryProvider>
            <div className={styles.home}>
                <div className={styles.header}>
                    <ProductHeaderMenu/>
                </div>
            <div className={styles.main}>
            <ProductMain/>
            </div>
            <div className={styles.footer__wrapper}>
            <ProductFooter/>
            </div>
            </div>
            </ReactQueryProvider>
        </div>
    );
  }