import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "wouter";
import { RootState } from "../redux/store";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  const email = useSelector((state: RootState) => state.auth.email);
  const params = useParams();

  return (
    <>
      <header className="relative border-b border-gray-300 bg-gray-100 shadow-sm">
        <div className="container mx-auto flex justify-between px-4">
          <nav className="-ml-8 flex font-semibold">
            <Link className="-mb-[2px] flex items-center gap-2 px-8 py-5" to={`/games/${params.gameId}`}>
              <span className="block size-5 rounded-full bg-gradient-to-br from-gray-500 to-black"></span>
              <span>Šifruj</span>
            </Link>
            <Link
              className="-mb-[2px] flex items-center gap-2 border-b-2 border-transparent px-8 py-5 transition hover:border-gray-500 hover:bg-gray-200"
              to={`/games/${params.gameId}/cyphers`}>
              Šifry
            </Link>
            <Link
              className="-mb-[2px] flex items-center gap-2 border-b-2 border-transparent px-8 py-5 transition hover:border-gray-500 hover:bg-gray-200"
              to={`/games/${params.gameId}/cyphers`}>
              Týmy
            </Link>
            <Link
              className="-mb-[2px] flex items-center gap-2 border-b-2 border-transparent px-4 py-5 transition hover:border-gray-500 hover:bg-gray-200"
              to={`/games/${params.gameId}/settings`}>
              Nastavení hry
            </Link>
          </nav>
          <nav className="-mr-8 font-medium">
            <Link
              to=""
              className="-mb-[2px] flex items-center gap-2 border-b-2 border-transparent px-8 py-5 transition hover:border-gray-500 hover:bg-gray-200">
              <span>{email}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.75"
                stroke="currentColor"
                className="size-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </Link>
          </nav>
        </div>
      </header>
      <main className="bg-white">
        <div className="container mx-auto max-w-7xl px-4">{children}</div>
      </main>
      <footer></footer>
    </>
  );
};
