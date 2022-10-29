import React, { useEffect, useState } from "react";
import Book from "./Book/Book";


export interface IBook {
    id:number,
    Title: string,
    Author:string,
    URL:string,
    Poster: string;
}

const useBooks = () => {
    const [books, setBooks] = useState<IBook[]>([]);

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API_URL + "/books")
        //fetch("http://localhost:3000/books")
            .then((res) => res.json())
            .then((data: IBook[]) => setBooks(data.slice(0, 10)))
            .catch((error) => console.error(error));
    }, []);
    //console.log(books);
    return books;
};

export const BookList = () => {
    const books = useBooks();
    console.log(books);
    return <div className=" flex flex-col justify-center text-white items-center p-8">
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
            {books.map((book) =>(
                <Book key={book.id} book={book} />
            ))}
        </ul>
    </div>
};








