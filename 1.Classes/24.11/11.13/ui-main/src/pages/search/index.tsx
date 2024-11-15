import React, { ReactNode } from "react";
import books from "@/mock/book.json";
import SearchableLayout from "@/components/searchable-layout";
import BookItem from "@/components/book-item";
import { GetServerSidePropsContext } from "next";
import fetchBooks from "@/lib/fetch-books";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // console.log(context);
  const q = context.query.q;
  const books = await fetchBooks(q as string);
  return {
    props: { books },
  };
};

const Page = ({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Page;
