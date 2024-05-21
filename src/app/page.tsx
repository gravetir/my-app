import { SessionProvider, useSession } from "next-auth/react";
import Footer from "../components/Footer/Footer";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import Main from "../components/Main/Main";
import styles from "./page.module.css";
import { useState } from "react";


export default function Home() { 
// const { data: session } = useSession();
// const [posts, setPosts] = useState();
// const fetchPost = async () => {
//   const res = await fetch("http://localhost:8888/test/user/1/posts", {
//     method: "Get",
//     headers: {
//       authorization: `bearer ${session?.user.token}`,
//     },
//   });

//   const response = await res.json();
//   setPosts(response);
//   };
  return (
    <div>
      {/* <SessionProvider> */}
      <div className={styles.home}>
        <div className={styles.header}>
          <HeaderMenu/>
        </div>
        <div className={styles.main}>
          <Main/>
        </div>
        <div className={styles.footer__wrapper}>
          <Footer/>
        </div>
      </div>
      {/* </SessionProvider> */}
    </div>
  );
}
