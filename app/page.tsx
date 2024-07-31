import AnimeList from "./component/AnimeList";
import HomeHeader from "./component/Home/HomeHeader";
import Header from "./component/Utilities/Header";
import Navbar from "./component/Utilities/Navbar";
import { getAnime, getNestedAnime, getRandom } from "../libs/api";

const Page = async () => {
  const anime = await getAnime("top/anime", "limit=10");
  let recomendationAnime = await getNestedAnime(
    "recommendations/anime",
    "entry"
  );
  recomendationAnime = getRandom(recomendationAnime, 10);

  return (
    <>
      <Navbar />
      {/* <HomeHeader /> */}
      <section>
        <Header
          HeaderTitle={"Top anime"}
          HeaderLink={"Lihat semua"}
          HeaderUrl={"populer"}
        />
        <AnimeList api={anime} />
      </section>

      <section>
        <Header HeaderTitle={"Recomendation anime"} />
        <AnimeList api={recomendationAnime} />
      </section>
    </>
  );
};

export default Page;
