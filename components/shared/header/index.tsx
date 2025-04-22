import Image from "next/image";
import Menu from "./menu";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full fixed z-20 bg-white">
      <div className="wrapper flex justify-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <div className="relative w-[15rem] h-[3.8rem]">
              <Image
                src="/images/printforge-logotype.png"
                alt="Printforge logo"
                className="object-contain"
                fill
              />
            </div>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
