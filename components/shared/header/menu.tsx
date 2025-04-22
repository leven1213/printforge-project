import Link from "next/link";

const Menu = () => {
  return (
    <div className="flex items-center justify-between">
      <nav className="flex items-center space-x-3 uppercase w-full">
        <ul className="text-[14px] font-[family-name:var(--font-geist-mono)] flex gap-[3rem]">
          <Link href="/">
            <li className="tracking-[5%]">3D models</li>
          </Link>
          <Link href="/">
            <li className="tracking-[5%]">About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
