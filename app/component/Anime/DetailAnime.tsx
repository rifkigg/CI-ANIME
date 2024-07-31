import { FaRegDotCircle } from "react-icons/fa";
import Image from "next/image";
import Episode from "./Episode";
import ButtonCollection from "./ButtonCollection";
import { useSession } from "next-auth/react";

const DetailAnime = ({ anime, id }: any) => {
  return (
    <>
      <h1 className="text-2xl text-primary text-center py-4">
        {anime.data.title}
      </h1>
      <div className="relative w-[150px] mx-auto my-4">
        <p
          className={`absolute top-1 right-1 text-primary rounded-full px-3 text-sm ${
            anime.data.rank === 1
              ? "bg-accent text-dark"
              : anime.data.rank === 2
              ? "bg-gray-300 text-dark"
              : anime.data.rank === 3
              ? "bg-amber-700"
              : "bg-teal-700"
          }`}
        >
          #{anime.data.rank}
        </p>
        <Image
          src={anime.data.images.webp.image_url}
          alt="..."
          width={100}
          height={100}
          className="w-[150px] object-cover"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {anime.data.genres.map((genre: any, index: any) => {
          return (
            <p
              key={index}
              className="py-1 px-3  border border-accent bg-secondary text-white rounded-lg my-2 text-sm"
            >
              {genre.name}
            </p>
          );
        })}
      </div>

      <div className="mx-auto my-3 w-[90%]">
        <ul className="grid grid-cols-1 sm:grid-cols-2">
          <li className="flex gap-2 items-center text-primary text-sm">
            <FaRegDotCircle className="text-accent" /> Popularity :{" "}
            {anime.data.popularity}
          </li>
          <li className="flex gap-2 items-center text-primary text-sm">
            <FaRegDotCircle className="text-accent" /> Rating :{" "}
            {anime.data.score} / 10
          </li>
          <li className="flex gap-2 items-center text-primary text-sm">
            <FaRegDotCircle className="text-accent" /> Status :{" "}
            {anime.data.status}
          </li>
          <li className="flex gap-2 items-center text-primary text-sm">
            <FaRegDotCircle className="text-accent" /> Episode :{" "}
            {anime.data.episodes}
          </li>
          <li className="flex gap-2 items-center text-primary text-sm">
            <FaRegDotCircle className="text-accent" /> Type : {anime.data.type}
          </li>
          <li className="flex gap-2 items-center text-primary text-sm">
            <FaRegDotCircle className="text-accent" /> Aired :{" "}
            {anime.data.aired.string}
          </li>
          <li className="flex gap-2 items-center text-primary text-sm">
            <FaRegDotCircle className="text-accent" /> Source :{" "}
            {anime.data.source}
          </li>
          <li className="flex gap-2 items-center text-primary text-sm">
            <FaRegDotCircle className="text-accent" /> Year : {anime.data.year}
          </li>
          <li className="flex gap-2 items-center text-primary text-sm">
            <FaRegDotCircle className="text-accent" /> Duration :{" "}
            {anime.data.duration}
          </li>
          <li className="flex gap-2 items-center text-primary text-sm">
            <FaRegDotCircle className="text-accent" /> Season :{" "}
            {anime.data.season}
          </li>
          <li className="flex gap-2 items-center text-primary text-sm">
            <FaRegDotCircle className="text-accent" /> Members :{" "}
            {anime.data.members}
          </li>
          <li className="flex gap-2 items-center text-primary text-sm">
            <FaRegDotCircle className="text-accent" /> Favorites :{" "}
            {anime.data.favorites}
          </li>
        </ul>
      </div>
      <p className="text-primary mx-3 text-[14px] mb-5">
        <span className="text-primary font-bold text-[18px]"> Synopsis : </span>
        {anime.data.synopsis}
      </p>

      <ButtonCollection id={id} />
      <Episode id={id} />
    </>
  );
};

export default DetailAnime;
