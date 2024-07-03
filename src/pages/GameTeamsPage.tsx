import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useParams } from "wouter";
import { Layout } from "../components/Layout";
import { Button } from "../components/atoms";
import { mocks } from "../mock";

export const GameTeamsPage = () => {
  const params = useParams();

  return (
    <Layout>
      <section className="py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-4xl font-semibold">Týmy</h2>
          <Button type="link" href={`/games/${params.gameId}/teams/new`} text="Vytvořit tým" icon={<PlusIcon />} />
        </div>
        <table className="mt-12 w-full">
          <thead>
            <tr>
              <th className="border-b border-gray-300 py-4 pr-5 text-left">Název</th>
              <th className="border-b border-gray-300 px-5 py-4 text-left">Login</th>
              <th className="border-b border-gray-300 px-5 py-4 text-left">Pin</th>
              <th className="border-b border-gray-300 px-5 py-4 text-left">Počet členů</th>
              <th className="border-b border-gray-300 py-4 pl-5 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {mocks.gameTeams.teams.map((team) => (
              <tr className="text-sm text-gray-700">
                <td className="border-b py-4 pr-5">{team.name}</td>
                <td className="border-b px-5 py-4">{team.username}</td>
                <td className="border-b px-5 py-4">{team.pin}</td>
                <td className="border-b px-5 py-4 text-center">{team.members}</td>
                <td className="space-x-3 border-b py-4 pl-5 text-right">
                  <span className="inline-flex rounded-md shadow-sm">
                    <a
                      href={`/games/${params.gameId}/teams/${team.id}`}
                      className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                      Zobrazit
                    </a>
                    <Menu as="span" className="relative -ml-px block">
                      <MenuButton className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                      </MenuButton>
                      <MenuItems
                        transition
                        className="absolute right-0 z-10 -mr-1 mt-1 origin-top-right rounded-md bg-white shadow-lg shadow-black/30 ring-1 ring-black ring-opacity-10 transition duration-200 ease-out focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0">
                        <div className="py-1">
                          <MenuItem key="Delete">
                            <a
                              href={`/games/${params.gameId}/teams/${team.id}/edit`}
                              className="flex items-center gap-3 px-6 py-2 text-left text-sm text-gray-700 transition hover:bg-gray-100">
                              <span>Upravit</span>
                              <PencilIcon className="-mr-3 size-4" />
                            </a>
                          </MenuItem>
                          <MenuItem key="Edit">
                            <button className="flex items-center gap-3 px-6 py-2 text-left text-sm text-gray-700 transition hover:bg-red-100 hover:text-red-600">
                              <span>Smazat</span>
                              <TrashIcon className="-mr-3 size-4" />
                            </button>
                          </MenuItem>
                        </div>
                      </MenuItems>
                    </Menu>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Layout>
  );
};
