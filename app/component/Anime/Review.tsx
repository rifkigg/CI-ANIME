// import { getAnime } from "@/app/libs/api";
// import Link from "next/link";

// const Review = async ({ id }: any) => {
//   const anime = await getAnime(`anime/${id}/reviews`, "");
//   return (
//     <>
//       <h1 className="my-4 text-2xl font-bold text-center text-primary ">
//         Review
//       </h1>
//       <div className="flex flex-col gap-4">
//         {anime.data.map((review: any, index: any) => {
//           return (
//             <>
//               <Link href={`${review.url}`} key={index}>
//                 <p>{review.user.username}</p>
//                 <div className="bg-secondary w-[90%]">
//                   <p className="text-primary">{review.review}</p>
//                 </div>
//               </Link>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Review;
