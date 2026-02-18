import React from "react";
import Head from "next/head";
import Navbar from "../global/Navbar";
import MobileNavbar from "../global/MobileNavbar";
import Footer from "../global/Footer";

function Page({ currentPage, meta: { desc }, children }: PageProps) {
  const pageTitle = `${currentPage === "Home"
    ? "Dave Canache - Software Developer"
    : `${currentPage} - Dave Canache`
    }`;
  console.log(currentPage);
  return (
    <div
      className="w-full m-auto flex flex-col items-center justify-center min-h-screen opening-box-animate-paddin text-white overflow-hidden md:overflow-visible"
      style={{ maxWidth: "1200px" }}
    >
      <Head>
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={desc} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={desc} />
      </Head>

      <header className="p-5 w-full z-50">
        <div className="hidden sm:block">
          <Navbar currentPage={currentPage} />
        </div>
        <div className="-m-5 block sm:hidden">
          <MobileNavbar />
        </div>
      </header>
      <main className="p-5 w-full flex-1 text-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Page;

type PageProps = {
  currentPage: string;
  meta: {
    title?: string;
    desc: string;
  };
  children?: JSX.Element | JSX.Element[];
};
