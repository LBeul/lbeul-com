import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Book } from '../interfaces';
import BookCardsGrid from '../components/BookCardsGrid';

const Books: NextPage = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [bookList, setBookList] = useState<Book[] | null>(null);
  useEffect(() => fetchBooks('http://localhost:3000/api/books'), []);

  const fetchBooks = (url: string): void => {
    setIsLoaded(false);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setBookList(data));
    setIsLoaded(true);
  };

  return <BookCardsGrid isLoaded={isLoaded} bookList={bookList} />;
};

export default Books;
