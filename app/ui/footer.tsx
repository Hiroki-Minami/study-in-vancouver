import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center pt-8 pb-4">
      <div className="flex gap-8 justify-center">
        <Link href={'/'}>
          <p className="text-sm hover:underline">ホーム</p>
        </Link>
        <Link href={'/study'}>
          <p className="text-sm hover:underline">学習環境</p>
        </Link>
        <Link href={'/work'}>
          <p className="text-sm hover:underline">仕事</p>
        </Link>
        <Link href={'/leisure'}>
          <p className="text-sm hover:underline">レジャー</p>
        </Link>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm">© 2024 Hiroki Minami. All rights reserved.</p>
      </div>
    </footer>
  );
}