import { useParams } from "wouter";
import { Layout } from "../components/Layout";

export const GameSetttingsPage = () => {
  const params = useParams();

  return (
    <Layout>
      <section className="py-16">
        <h2 className="text-4xl font-semibold">Nastavení hry</h2>
      </section>
    </Layout>
  );
};
