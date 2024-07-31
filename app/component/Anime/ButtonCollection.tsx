"use client";
import { UserSession } from "@/libs/auth";
import { useSession } from "next-auth/react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";

// import { UserSession } from "@/app/libs/auth";

const ButtonCollection = ({ id }: any) => {
  const { data: session } = useSession(); // Call useSession as a hook
  const user = session?.user;
  const handleCollection = async (event: any) => {
    event.preventDefault();

    const data = { anime_mal_id: id, user_email: user?.email };

    try {
      const response = await fetch("/api/v1/collection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Tambahkan header ini
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Respons jaringan tidak oke");
      }

      const collection = await response.json();
      console.log(collection);
    } catch (error) {
      console.error("Terjadi masalah dengan operasi fetch:", error);
    }
  };

  return (
    <div className="mx-3">
      <button
        onClick={handleCollection}
        className="bg-red-400 text-primary py-3 px-5 w-full mx-auto mb-4 rounded-xl hover:bg-red-300 flex justify-center items-center gap-5"
      >
        <FaBookmark /> Add to Collection
      </button>
    </div>
  );
};

export default ButtonCollection;
