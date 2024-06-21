import { Layout } from "../components/Layout";
import { CountdownText } from "../components/atoms";
import { mocks } from "../mock";

const addHours = (date: Date, hours: number) => {
  date.setHours(date.getHours() + hours);
  return date;
};

export const GameHomePage = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="grid grid-cols-5 gap-36">
          <div className="col-span-3">
            <h2 className="text-4xl font-semibold">Přehled týmů</h2>
            <ul className="mt-4 divide-y divide-gray-300">
              {mocks.gameOverview.teams.map((team) => (
                <li className="py-6 text-lg text-gray-900">
                  <div className="flex items-center justify-between gap-12">
                    <div>
                      <p className="font-medium">{team.name}</p>
                    </div>
                    <p className="mt-1 flex gap-0.5">
                      {team.cyphers.map((cypher) => (
                        <>
                          {cypher === "solved" && (
                            <span className="relative">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-7 text-green-500">
                                <path
                                  fillRule="evenodd"
                                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          )}
                          {cypher === "solvedWithHelp" && (
                            <span className="relative">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-7 text-green-500">
                                <path
                                  fillRule="evenodd"
                                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="absolute -right-1 -top-1 rounded-full bg-white">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="size-4 text-amber-500">
                                  <path
                                    fill-rule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                              </span>
                            </span>
                          )}
                          {cypher === "skipped" && (
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-7 text-red-500">
                                <path
                                  fillRule="evenodd"
                                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          )}
                          {cypher === "active" && (
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="size-7 text-amber-500">
                                <circle cx="12" cy="12" r="9" />
                              </svg>
                            </span>
                          )}
                          {cypher === "locked" && (
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="size-7 text-gray-400">
                                <circle cx="12" cy="12" r="9" />
                              </svg>
                            </span>
                          )}
                        </>
                      ))}
                    </p>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="-mx-2 mt-1 flex items-center justify-start text-sm text-gray-600">
                      <p className="px-2">{team.points} bodů</p>
                      <span className="text-xs text-gray-400">-</span>
                      <p className="px-2">{team.members} Členové</p>
                      <span className="text-xs text-gray-400">-</span>
                      <p className="px-2">{team.activeCypher}. Šifra</p>
                    </div>
                    <div className="flex gap-1 text-sm text-gray-500">
                      <p>PIN:</p>
                      <p>2345</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 space-y-4">
            <div className="space-y-1 rounded-lg border border-gray-200 bg-gray-100">
              <div className="rounded-t-lg border-b border-gray-200 px-8 py-6">
                <p>
                  Do konce hry zbývá <CountdownText date={addHours(new Date(), 2)} />
                </p>
              </div>
              <div className="px-8 py-6">
                <table>
                  <tbody>
                    <tr>
                      <th className="py-0.5 text-left font-semibold">Týmy se nacházejí na stanovištích:</th>
                      <td className="py-0.5 pl-4 text-right">4-8</td>
                    </tr>
                    <tr>
                      <th className="py-0.5 text-left font-semibold">Počet týmů, kteří dokončili hru:</th>
                      <td className="py-0.5 pl-4 text-right">3</td>
                    </tr>
                    <tr>
                      <th className="py-0.5 text-left font-semibold">Počet týmů, kteří opustili hru:</th>
                      <td className="py-0.5 pl-4 text-right">3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
