"use client";
import { useEffect, useState } from "react";
import Header from "../component/Utilities/Header";
import AnimeList from "../component/AnimeList";
import PaginationMenu from "../component/Utilities/PaginationMenu";
import BannerMenu from "../component/Utilities/BannerMenu";
import Navbar from "../component/Utilities/Navbar";
import { useSession } from "next-auth/react";

const page = () => {
  const [page, setPage] = useState(1);
  const [anime, setAnime] = useState<any>([]);

  const fetchData = async () => {
    const response = await fetch(
      `https://api.jikan.moe/v4/top/anime?page=${page}`,
      {
        cache: "no-cache",
      }
    );
    const data = await response.json();
    setAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const { data: session } = useSession();
  console.log(session);

  return (
    <div>
      <Navbar />
      <BannerMenu page={page} />
      <AnimeList api={anime} />
      <PaginationMenu
        page={page}
        lastPage={anime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </div>
  );
};

export default page;
