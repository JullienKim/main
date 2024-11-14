import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import SearchableLayout from "@/components/searchable-layout";
import BookItem from "@/components/book-item";

const Page = () => {
  // const router = useRouter();
  // console.log(router);
  // const {
  //   query: { q },
  // } = router;
  // console.log(q);

  // return <div>Search: {q}</div>;
  return <div>
    {books.map((book)=> (
    <BookItem key={book.id{...book}}/>)
  )}
  </div>;
};

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Page;
