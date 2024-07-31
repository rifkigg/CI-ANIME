import { getAnime } from "@/libs/api";
import Image from "next/image";
import Link from "next/link";
const Episode = async ({ id }: any) => {
  const anime = await getAnime(`anime/${id}/videos/episodes`, "");
  return (
    <div className="bg-secondary mx-3">
      <p className="text-2xl text-primary font-bold p-3">Episode</p>
      <div className="flex flex-col-reverse flex-nowrap overflow-scroll hide-scrollbar mx-3 h-56 md:h-96 mb-14">
        {anime.data?.map((episode: any, index: any) => {
          return (
            <Link
              href={`${episode.url}`}
              target="_blank"
              key={index}
              className="bg-secondary text-sm md:text-xl text-primary mx-auto w-full p-3 flex items-center gap-4 border-b-2 border-b-dark "
            >
              {episode.images.jpg.image_url === null ? null : (
                <Image
                  src={episode.images.jpg.image_url}
                  alt={episode.episode}
                  width={100}
                  height={120}
                />
              )}
              <section>
                <p className="w-auto font-bold mt-1 text-accent">
                  {episode.episode}
                </p>
                <p className="">{episode.title}</p>
              </section>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Episode;
