import { useParams } from "wouter";
import { Layout } from "../components/Layout";

export const GameCyphersPage = () => {
  const params = useParams();

  return (
    <Layout>
      <section className="py-16">
        <h2 className="text-4xl font-semibold">Šifry</h2>
      </section>
    </Layout>
  );
};
