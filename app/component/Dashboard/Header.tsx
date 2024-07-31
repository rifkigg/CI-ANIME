"use client"
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

const Header = () => {
  const router = useRouter();
  const handle = (event: any) => {
    event.preventDefault();
    router.back();
  };
  return (
    <div className="flex justify-between items-center my-4 mx-2 text-primary">
      <button className="text-xl" onClick={handle}>
        <IoArrowBack />
      </button>
      <h1 className="text-xl">My Collections</h1>
    </div>
  );
};

export default Header;
