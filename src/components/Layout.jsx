import React from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>PokeNext</title>
      </Head>
      <div className="flex flex-col min-h-screen ">
        <Navbar />
        <main className={
          `flex-grow min-w-4 mx-auto px-4 sm:px-6 xl:max-w-8xl xl:px-0 
          `
        }
        >
          <div className="container mx-auto h-full">{children}</div>
        </main>
        <Footer />
      </div>

    </>

  );
}
