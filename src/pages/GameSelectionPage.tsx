import { Link } from "wouter";
import { mocks } from "../mock";

export const GameSelectionPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="container space-y-16 px-4 py-36 sm:px-5 md:px-6 lg:px-7 xl:px-8">
        <h1 className="text-center text-5xl font-bold tracking-wide text-gray-950">Vyberte vaši hru</h1>
        <ul className="flex flex-wrap justify-center gap-4">
          {mocks.games.map((game) => (
            <li key={game.id}>
              <Link
                href={`/games/${game.id}`}
                className="group flex flex-col items-center gap-3 rounded-lg border border-gray-300 bg-white p-8 transition hover:border-gray-400 hover:shadow-xl">
                <img src={game.logo} className="size-24 rounded-full border border-gray-500" alt="" />
                <h2 className="text-center text-xl font-medium tracking-wide text-gray-900">{game.title}</h2>
                <div className="space-y-1 font-light text-gray-700">
                  <p>{game.teams} týmů</p>
                  <p>{game.cyphers} šifer</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};
