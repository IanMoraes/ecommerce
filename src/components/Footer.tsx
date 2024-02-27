import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white shadow  dark:bg-gray-800  w-screen fixed bottom-0  ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 mr-2">
          © 2022{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Ian Moraes Eduardo
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="https://github.com/IanMoraes?tab=repositories" className="hover:underline me-4 md:me-6">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ian-moraes-eduardo-973717180/" className="hover:underline me-4 md:me-6">
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
