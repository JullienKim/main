// supabase 개인용 가상 서버할당,cloud 방식의 서버

import { BookData } from "@/types";

const fetchBooks = async (q?: string): Promise<BookData[]> => {
  const url = "http://localhost:12345/book";
  if (q) {
    // url += `/search?q=${q}`;
  }
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default fetchBooks;
