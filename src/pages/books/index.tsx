import React, { NextPage } from "next";
import { BookList } from "../../components/BooksList/BookList";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper";

interface TProps  {
    response: string;
};

const Books: NextPage<TProps> = () => {
    return (
    <ApplicationWrapper
        title="Books"
        description="Home of the rootlab books website"
    >
        <div className="grow flex flex-col justify-center items-center bg-[url('/images/code.avif')] bg-cover">
        <div className="grow bg-black w-full justify-center items-center flex opacity-90">
            <BookList/>
        </div>
        </div>
    </ApplicationWrapper>
    );
};

export default Books;
