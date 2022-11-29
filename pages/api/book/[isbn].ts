import type { NextApiRequest, NextApiResponse } from 'next';
import { Book } from '../../../interfaces';
import bookList from '../bookList';

export default function bookHandler(
  req: NextApiRequest,
  res: NextApiResponse<Book>
) {
  const {
    query: { isbn },
    method,
  } = req;

  switch (method) {
    case 'GET':
      const book = getBookByIsbn(isbn);
      if (book === undefined) {
        res.status(404).end();
      } else {
        res.status(200).json(book);
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

const getBookByIsbn = (isbn: string | string[]): Book | undefined => {
  return bookList.find((book) => book.isbn === isbn);
};
