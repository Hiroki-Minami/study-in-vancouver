export default function HamburgerButton({
  isOpen,
  setIsOpen,
}: Readonly<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>) {
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-300`;
    
  return (
    <button
        className={`flex flex-col h-12 w-12 bg-white dark:bg-black rounded justify-center items-center group`}
        onClick={() => setIsOpen(!isOpen)}
    >
        <div
            className={`${genericHamburgerLine} ${
                isOpen
                    ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-100"
            }`}
        />
        <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-100"}`} />
        <div
            className={`${genericHamburgerLine} ${
                isOpen
                    ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-100"
            }`}
        />
    </button>
  );
}