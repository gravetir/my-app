import styles from "./page.module.css";
import CatalogHeaderMenu from "@/components/CatalogHeadermenu/headermenu";
import CatalogMain from "@/components/CatalogMain/main";
import CatalogFooter from "@/components/CatalogFooter/footer";
import ReactQueryProvider from "@/providers/react-query";

export default function Catalog() {
    return (
        <div>
            <ReactQueryProvider>
            <div className={styles.home}>
                <div className={styles.header}>
                    <CatalogHeaderMenu/>
                </div>
            <div className={styles.main}>
            <CatalogMain/>
            </div>
            <div className={styles.footer__wrapper}>
            <CatalogFooter/>
            </div>
            </div>
            </ReactQueryProvider>
        </div>
    );
  }