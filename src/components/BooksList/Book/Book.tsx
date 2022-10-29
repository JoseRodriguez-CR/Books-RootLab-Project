import Link from 'next/link';
import React, {FC} from 'react';
import{IBook} from "../BookList";

interface TProps  {
    book: IBook;
}

const Book: FC<TProps> = ({book}) => {
    return (
        <li >
            <Link href={`/books/${book.id}`}>
                <img src={book.Poster} alt={`${book.Title} Poster`} />
            </Link>
            <strong className="text-xl ">{book.Title}</strong>
        </li>
    )
}

export default Book;