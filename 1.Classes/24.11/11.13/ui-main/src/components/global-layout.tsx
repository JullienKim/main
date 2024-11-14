import Link from "next/link";
import { ReactNode } from "react";
import style from "./global-layout.module.css";

const GlobalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={"/"}>Book List 📚</Link>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>Copyright @Jullien</footer>
    </div>
  );
};

export default GlobalLayout;
