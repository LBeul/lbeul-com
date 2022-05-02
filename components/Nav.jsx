import Link from "next/link";

const Nav = () => {
  return (
    <nav className="container bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" passHref>
          <div className="flex-1">
            <a className="text-2xl font-bold font-mono dark:text-white">
              lbeul
            </a>
          </div>
        </Link>
        <ul className="flex flex-row space-x-8 mt-0 text-sm font-medium">
          <li>
            <Link href="/about" passHref>
              <p
                className="block bg-transparent text-blue-700 p-0 dark:text-white"
                aria-current="page"
              >
                About me
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
