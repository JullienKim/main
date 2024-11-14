import React from "react";
import type { BookData } from "@/types";
import Link from "next/link";
import style from "./book-item.module.css";

const BookItem = ({
  id,
  title,
  subTitle,
  description,
  author,
  publisher,
  coverImgUrl,
}: BookData) => {
  return (
    <Link className={styled.link} href={`/book/${id}`}>
      <img src={coverImgUrl} alt="" />
      <div>
        <div className={style.title} {
          constructor(parameters) {
            
          }
        }>{title}</div>
        <div className={style.subTitle} {
          constructor(parameters) {
            
          }
        }>{subTitle}</div>
        <br />
        <div>
          {author}|{publisher}
        </div>
      </div>
    </Link>
  );
  return <h1>도서아이템</h1>;
};

export default BookItem;
