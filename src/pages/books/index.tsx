import React, { NextPage } from "next";
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
        <div className="grow flex flex-col justify-center items-center bg-[url('/images/home-bg.jpg')]">
        <div className="grow bg-black w-full justify-center items-center flex opacity-70">
            <h1 className="text-7xl font-bold underline text-white ">
            Books
            </h1>
        </div>
        </div>
    </ApplicationWrapper>
    );
};

export default Books;
