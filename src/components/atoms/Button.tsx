import { ReactNode } from "react";
import { Link } from "wouter";

type Props = { type: "link"; href: string; text: string; icon?: ReactNode } | { type: "button"; onClick: () => void };

export const Button = (props: Props) => {
  if (props.type === "link")
    return (
      <Link
        href={props.href}
        className="flex items-center justify-center gap-3 rounded-md border border-transparent bg-blue-600 px-4 py-2.5 text-sm tracking-wide text-white shadow-sm transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        {props.icon && <span className="size-5">{props.icon}</span>}
        <span>{props.text}</span>
      </Link>
    );
};
