import Log from "@/components/Login/Login";
import styles from "./page.module.css";
import ReactQueryProvider from "@/providers/react-query";

export default function Catalog() {
    return (
        <div className={styles.home}>
            <ReactQueryProvider>
                <Log/>
            </ReactQueryProvider>
        </div>
    );
  }