import { getAnime } from "@/libs/api";
import Navbar from "@/app/component/Utilities/Navbar";
import DetailAnime from "@/app/component/Anime/DetailAnime";
import VideoPlayer from "@/app/component/Utilities/VideoPlayer";

const page = async ({ params: { id } }: any) => {
  const anime = await getAnime(`anime/${id}`, "");

  return (
    <>
      <Navbar />
      <DetailAnime anime={anime} id={id} />
      <VideoPlayer YoutubeId={anime.data.trailer.youtube_id} />
    </>
  );
};

export default page;
