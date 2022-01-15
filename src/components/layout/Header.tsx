import Link from "next/link";
import { VFC } from "react";

const items = [
  { href: "/", label: "CountPage", className: "inline-block p-4 text-red-500" },
  { href: "/about", label: "FetchPage", className: "inline-block p-4 text-blue-500" },
];

export const Header: VFC = () => {
  return (
    <div className="flex justify-between">
      <h1 className="pl-10 text-5xl">
        <a href="https://github.com/pmndrs/valtio">Valtio</a>
      </h1>
      <nav className="pr-10">
        {items.map(({ href, label, className }) => {
          return (
            <Link key={href} href={href}>
              <a className={className}>{label}</a>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
