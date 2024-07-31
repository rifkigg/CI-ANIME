import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";

const AnimeList = ({ api }: any) => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 m-5 mt-0 ">
        {api.data?.map((anime: any, index: any) => {
          return (
            <Link
              href={`/anime/${anime.mal_id}`}
              className="animeList text-primary rounded p-4 transiton transition-all duration-300 ease-in-out transform hover:-translate-y-3 hover:scale-105 shadow-xl"
              key={index}
            >
              <Image
                src={anime.images.webp.image_url}
                alt="..."
                width={350}
                height={350}
                className="anime mx-auto my-2 w-full max-h-52 object-cover "
              />
              <p className="font-bold text-sm">{anime.title}</p>
              {/* <p className="text-[14px]">E {anime.episodes}</p>
              <div className="flex items-center my-2 gap-1">
                <FaStar className="text-accent" />{" "}
                <p className="text-[12px]">{anime.score}</p>
                <LuDot />
                <p className="text-[12px]">{anime.type}</p>
                <LuDot />
                <p className="text-[12px]">{anime.year}</p>
              </div>
              <div
                className={` absolute bottom-2 end-2 text-white text-[12px] rounded-lg px-2 ${
                  anime.source === "Manga"
                    ? "bg-red-500"
                    : anime.source === "Light novel"
                    ? "bg-green-500"
                    : anime.source === "Original"
                    ? "bg-yellow-500"
                    : anime.source === "Visual novel"
                    ? "bg-blue-500"
                    : "bg-teal-500"
                } `}
              >
                {anime.source}
              </div> */}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default AnimeList;
