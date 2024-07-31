import Navbar from "@/app/component/Utilities/Navbar";
import Link from "next/link";
import Image from "next/image";
import Header from "@/app/component/Dashboard/Header";

const Page = () => {
  return (
    <>
      <Navbar />
      <Header />
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link href="#" className="border-2 border-accent relative">
          <Image
            src="/public/images/1.jpg"
            alt="..."
            width={300}
            height={300}
            className="w-full"
          />
          <h3 className="absolute bottom-0 w-full text-center text-primary bg-accent py-3">
            Judul Anime
          </h3>
        </Link>
      </section>
    </>
  );
};

export default Page;
