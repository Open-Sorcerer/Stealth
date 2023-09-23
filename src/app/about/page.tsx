'use client'
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

if (typeof window !== 'undefined') {
  window.addEventListener('error', function (event) {
    console.log('Caught via addEventListener', event);
    // Here you could send the error information to an error tracking service
  });
}

const About: NextPage = () => {
  const notify = () =>
    toast("💛 Almost too EZ !");

  return (
    <>
      <Head>
        <title>xNFT Solana DApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-full flex flex-col justify-center items-center mt-2 md:mt-10'>
        <div className="bg-gradient-to-br from-black to-matte-black py-5 px-2 rounded-lg shadow-xl shadow-black">
          <div className="flex flex-col justify-center p-2 bg-inherit gap-4">
            <div className='flex flex-row justify-center items-center gap-10'>
              <a
                href="https://github.com/Open-Sorcerer"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <Image
                  src="/golden_wizzie.svg"
                  height='160'
                  width='150'
                  priority
                  style={{
                    objectFit: "contain",
                  }}
                  alt="logo"
                />
              </a>
            </div>
            <h1 className='text-xl font-bold'>GM folkzzzzz, meet team {" "}
            <a className="text-amber-500 animate-pulse hover:animate-none hover:underline"
                href="https://github.com/Open-Sorcerer"
                target="_blank"
                rel="noopener noreferrer"
              >Open-Sorcerers
              </a>
              </h1>
            <p className='text-base'>
              Built with 💛 using <br/>
              <b className='font-medium'>xNFT Backpack 🎒 + Solana</b><br/>
            </p>
            <div className="flex flex-row gap-4 justify-around  items-center py-1">
              <button onClick={notify} className="rounded-xl bg-amber-500 text-black hover:shadow-amber-500/50 shadow-xl font-medium py-3 px-8 ring-2 ring-gray-900 ring-offset-4 ring-offset-black transition-all">
                LFG!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
