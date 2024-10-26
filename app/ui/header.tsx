import Link from "next/link";

export default function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 z-[9999] hidden md:flex justify-between items-center py-4 px-8 bg-white text-black dark:bg-black dark:text-white'>
      <Link href={'/'}>
        <p className="text-lg hover:underline">バンクーバー留学</p>
      </Link>
      <nav className="flex md:gap-24 lg:gap-32 mx-auto">
        <Link href={'/study'}>
          <p className="text-lg hover:underline">学習環境</p>
        </Link>
        <Link href={'/work'}>
          <p className="text-lg hover:underline">仕事</p>
        </Link>
        <Link href={'/leisure'}>
          <p className="text-lg hover:underline">レジャー</p>
        </Link>
      </nav>
    </header>
  );
}