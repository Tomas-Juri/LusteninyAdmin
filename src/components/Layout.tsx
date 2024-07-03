import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "wouter";
import { mocks } from "../mock";
import { RootState } from "../redux/store";
import { Footer } from "./organisms";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  const email = useSelector((state: RootState) => state.auth.email);
  const params = useParams();
  const gameId = params.gameId;

  const game = mocks.games.find((x) => x.id === +gameId!);

  return (
    <>
      <header className="relative border-b border-gray-300 bg-gray-100 shadow-sm">
        <div className="container mx-auto flex justify-between px-4">
          <nav className="-ml-8 flex font-semibold">
            <Link
              className="-mb-[2px] flex items-center gap-3 border-b-2 border-transparent px-8 py-5 transition hover:border-gray-500 hover:bg-gray-200"
              to={`/games/${gameId}/`}>
              <img src={game?.logo} className="-my-4 size-10 rounded-full" alt="" />
              <span>{game?.title}</span>
            </Link>
            <Link
              className="-mb-[2px] flex items-center gap-2 border-b-2 border-transparent px-8 py-5 transition hover:border-gray-500 hover:bg-gray-200"
              to={`/games/${gameId}/`}>
              Přehled
            </Link>
            <Link
              className="-mb-[2px] flex items-center gap-2 border-b-2 border-transparent px-8 py-5 transition hover:border-gray-500 hover:bg-gray-200"
              to={`/games/${gameId}/cyphers`}>
              Šifry
            </Link>
            <Link
              className="-mb-[2px] flex items-center gap-2 border-b-2 border-transparent px-8 py-5 transition hover:border-gray-500 hover:bg-gray-200"
              to={`/games/${gameId}/teams`}>
              Týmy
            </Link>
            <Link
              className="-mb-[2px] flex items-center gap-2 border-b-2 border-transparent px-4 py-5 transition hover:border-gray-500 hover:bg-gray-200"
              to={`/games/${gameId}/settings`}>
              Nastavení hry
            </Link>
          </nav>
          <nav className="flex">
            <Menu>
              <MenuButton className="flex items-center gap-2 px-8 py-5 transition hover:bg-gray-200">
                <span className="font-medium">{email}</span>
              </MenuButton>

              <MenuItems
                transition
                anchor="bottom end"
                className="mt-1 origin-top-right rounded-md border border-gray-300 bg-white py-1 text-black shadow-xl transition duration-200 ease-out focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0">
                <div className="mb-1 flex items-center gap-3 border-b px-6 py-3 font-medium">
                  <span>{game?.title}</span>
                  <img src={game?.logo} className="size-6 rounded-full" alt="" />
                </div>
                <MenuItem>
                  <a className="flex items-center gap-3 px-6 py-2.5 text-left text-gray-700 transition hover:bg-gray-100">Nastavení účtu</a>
                </MenuItem>
                <MenuItem>
                  <Link href="/" className="flex items-center gap-3 px-6 py-2.5 text-left text-gray-700 transition hover:bg-gray-100">
                    Změnit hru
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/login" className="flex items-center gap-3 px-6 py-2.5 text-left text-gray-700 transition hover:bg-gray-100">
                    Odhlásit se
                  </Link>
                </MenuItem>
              </MenuItems>
            </Menu>
          </nav>
        </div>
      </header>
      <main className="bg-white">
        <div className="container mx-auto max-w-7xl px-4">{children}</div>
      </main>
      <Footer />
    </>
  );
};
