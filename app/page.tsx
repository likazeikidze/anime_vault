import AnimeCard, { AnimeCardProps } from "@/components/AnimeCard";
import LoadMore from "@/components/LoadMore";
import { data } from "./_data";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 py-16 px-8 sm:p-16">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

      <section className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item: AnimeCardProps, index) => (
          <AnimeCard key={item.id} index={index} anime={item} />
        ))}
      </section>

      <LoadMore />
    </main>
  );
}
