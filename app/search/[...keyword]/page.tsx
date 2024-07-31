import AnimeList from "@/app/component/AnimeList";
import Header from "@/app/component/Utilities/Header";
import Navbar from "@/app/component/Utilities/Navbar";
import { getAnime } from "@/libs/api";

const Page = async ({ params }: any) => {
  const keyword = params.keyword;

  const decodeKeyword = decodeURI(keyword);

  const SearchAnime = await getAnime("anime", `q=${decodeKeyword}`);

  return (
    <>
      <Navbar />
      <Header HeaderTitle={`Pencarian untuk ${decodeKeyword}......`} />
      <AnimeList api={SearchAnime} />
    </>
  );
};

export default Page;
