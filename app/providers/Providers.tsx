'use client';

import { ThemeProvider } from "next-themes";
import ToasterProvider from "./ToasterProvider";
import { BackToTop } from "../components/BackToTopBtn";

const Providers = ({children}: any) => {
    return (
        <>
            <ToasterProvider/>
            <BackToTop />
            <ThemeProvider attribute="class">{children}</ThemeProvider>
        </>
    )
}

export default Providers;
