import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import React from 'react'
import { IBook } from '../../components/BooksList/BookList';
import { ApplicationWrapper } from '../../components/layout/ApplicationWrapper'

interface TProps {
    book: IBook;
}

const BookDetailPage: NextPage<TProps> = ({ book }) => {
    console.log(book+'hello');
    return <ApplicationWrapper title={book.Title}>
        <div className="flex flex-col justify-center items-center">
            <Link href={book.URL}>
            <h1 className='text-white text-2xl p-6 hover:text-amber-600'>{book.Title}</h1>
            </Link>
            <img src={book.Poster} alt={`${book.Title} Poster`} className="w-80 flex justify-center"/>
            <h1 className='text-white text-l p-4'>{`Author(s): ${book.Author}`}</h1>
        </div>
        
    </ApplicationWrapper>
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + '/books/' + context.params?.id
        );
    const book = await res.json();
    return {
        props: {
            book,
        },
    };
};

export default BookDetailPage;