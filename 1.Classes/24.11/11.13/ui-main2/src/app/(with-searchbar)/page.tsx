import styles from "./page.module.css";
import ClientComponent from "../../components/client-component";
import ServerComponent from "../../components/server-component";

export default function Home() {
  // console.log("컴포턴트 실행!");
  return (
    <div className={styles.page}>
      인덱스 페이지
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
