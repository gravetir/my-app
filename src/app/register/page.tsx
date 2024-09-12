import styles from "./page.module.css"
import ReactQueryProvider from "@/providers/react-query";
import Reg from "@/components/Register/Register";

export default function Register() {
    return (
        <div className={styles.home}>
            <ReactQueryProvider>
                <Reg/>
            </ReactQueryProvider>
        </div>
    );
  }