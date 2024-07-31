"use client"
import Navbar from "@/app/component/Utilities/Navbar";
import { UserSession } from "@/libs/auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const { data: session } = useSession();
  const user = session?.user;
  //   console.log(user);
  return (
    <>
      <Navbar />
      <div className=" flex flex-col justify-center items-center mt-4 text-xl gap-2">
        <h5 className="mb-2 text-primary">Selamat datang, {user?.name}</h5>
        {user?.image && (
          <Image src={user.image} width={200} height={200} alt="profil" />
        )}
        <section className="flex justify-center items-center gap-2">
          <Link
            href="/users/dashboard/collections"
            className="bg-accent py-2 px-4 rounded text-dark"
          >
            My Collections
          </Link>
          <Link
            href="/users/dashboard/comments"
            className="bg-accent py-2 px-4 rounded text-dark"
          >
            My Comments
          </Link>
        </section>
      </div>
    </>
  );
};

export default page;
