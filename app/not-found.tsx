"use client";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  const handle = (event: any) => {
    event.preventDefault();
    router.back();
  };
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <h1 className="text-6xl text-accent m-5">Not Found</h1>
      <p className="text-xl text-primary">don't search for random urls</p>
      <button
        onClick={handle}
        className=" text-primary absolute bottom-10 hover:text-accent transition-all"
      >
        Back to previous page
      </button>
    </div>
  );
};
export default NotFound;
