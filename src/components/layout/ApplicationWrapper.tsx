import Head from "next/head";
import Link from "next/link";
import React, { FC, PropsWithChildren } from "react";
import { Nav } from "../common/Nav";

interface TProps {
    title: string;
    description?: string;
}

export const ApplicationWrapper: FC<PropsWithChildren<TProps>> = ({
    title,
    description,
    children,
}) => {
const displayTitle = `${title} | Rootlab Books`;

return (
    <div className="bg-black min-h-screen flex flex-col">
        <Head>
            <title>{displayTitle}</title>
            {description && <meta name="description" content={description} />}
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className="bg-cyan-500 h-20">
            <Nav />
        </header>
        <main className="grow flex flex-col text-white ">{children}</main>
        <footer className="flex p-6 h20 text-black underline text-2xl font-bold italic bg-cyan-500 items-center justify-center">
            <a
                href="https://github.com/JoseRodriguez-CR"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-white"
            >
                Developed by <span className="">José Mario Rodríguez </span>
            </a>
        </footer>
    </div>
);
};
