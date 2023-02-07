import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Li = ({ href, name }) => {
  const router = useRouter();
  return (
    <li
      className={
        router.pathname == href
          ? "border-b-4 border-yellow-400 dark:text-yellow-400 pb-1"
          : "dark:text-gray-400 pb-1"
      }
    >
      <Link href={href}>{name}</Link>
    </li>
  );
};

const NavLinks = () => {
  return (
    <ul className="flex gap-6 items-center">
      <Li href={"/"} name={"Home"} />
      <Li href={"/trending"} name={"Trending"} />
      <Li href={"/tvseries"} name={" TV Series"} />
      <Li href={"/movies"} name={" Movies"} />
    </ul>
  );
};

export default NavLinks;
