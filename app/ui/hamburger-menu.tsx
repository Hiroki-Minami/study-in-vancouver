'use client';
import Link from "next/link";
import HamburgerButton from "./component/hamburger-button";
import { useState } from "react";

export default function HamburgerMenu(
) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <div className="sm:block md:hidden fixed top-4 right-4 p-4">
          <HamburgerButton 
              isOpen={isOpen}
              setIsOpen={setIsOpen}
          />
      </div>
      <div className={`'w-screen w-full h-full fixed top-0 right-0 transition-transform duration-200 ease-in-out transform z-20 overflow-hidden bg-white text-black dark:bg-black dark:text-white ' ${
        isOpen ? "translate-x-0": "translate-x-full"}`}
      >
          <div className='fixed top-4 right-4 p-4'>
              <HamburgerButton 
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
              />
          </div>
          <div className="text-2xl h-full flex flex-col items-center justify-center space-y-6 gap-8">
            <Link href={'/'} onClick={() => setIsOpen(!isOpen)}>
              <p className="text-lg hover:underline">ホーム</p>
            </Link>
            <Link href={'/study'} onClick={() => setIsOpen(!isOpen)}>
              <p className="text-lg hover:underline">学習環境</p>
            </Link>
            <Link href={'/work'} onClick={() => setIsOpen(!isOpen)}>
              <p className="text-lg hover:underline">仕事</p>
            </Link>
            <Link href={'/leisure'} onClick={() => setIsOpen(!isOpen)}>
              <p className="text-lg hover:underline">レジャー</p>
            </Link>
          </div>
        </div>
      </div>
  );
}