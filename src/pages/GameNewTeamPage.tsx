import { useParams } from "wouter";
import { Layout } from "../components/Layout";

export const GameNewTeamPage = () => {
  const params = useParams();

  return (
    <Layout>
      <section className="py-16">
        <h2 className="mb-12 text-center text-4xl font-semibold">Vytvořit nový tým</h2>
        <div className="mx-auto max-w-md space-y-6">
          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">
              Název týmu
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">
              Počet členů
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
