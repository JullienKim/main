import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const onClickButton = () => {
    router.push("/test");
    // router.replace("/test");
    // router.back()
  };
  useEffect(() => {
    router.prefetch("/test");
  }, []);
  return (
    <>
      <header>
        <Link href={"/"}>Index</Link>
        &nbsp;
        <Link href={"/search"} prefetch={false}>Search</Link>
        &nbsp;
        <Link href={"/book.1"}>Book1</Link>
        <div>
          <button onClick={onClickButton}>test 페이지로 이동</button>
        </div>
        <Component {...pageProps} />
      </header>
    </>
  );
}
