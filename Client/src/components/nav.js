import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { facesmile } from "@fortawesome/free-regular-svg-icons";
export const NavBarr = () => {
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-zinc-900 fixed w-full z-20 top-0 left-0 border-b border-zinc-900 dark:border-zinc-900">
      <div className="container flex flex-wrap justify-between px-6 items-center mx-auto">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            NIKKI F
          </span>
        </a>

        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white bg-orange-500 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:orange-500 dark:hover:bg-orange-700 dark:focus:ring-blue-800">
            <a href="/seeAlldestinations">Blog</a>
          </button>
          <a
            href="/login"
            className="text-white focus:ring-4 focus:outline-none focus:ring-orange-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">
            <i class="fa-regular fa-face-smile"></i>
          </a>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-zinc-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-2 pr-4 pl-3 text-white bg-zinc-900 rounded md:bg-transparent md:text-orange-500 md:p-0 dark:text-white"
                aria-current="page">
                Home
              </a>
            </li>

            <li>
              <a
                href="#About"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
