import Link from "next/link";
import InputSearch from "./InputSearch";
import ButtonLogin from "../Navbar/ButtonLogin";

const Navbar = () => {
  return (
    <div className="bg-accent p-4 flex flex-col md:flex-row justify-between md:items-center gap-2">
      <Link href="/" className="text-xl font-bold">
        CI ANIME
      </Link>
      <InputSearch />
      <ButtonLogin />
    </div>
  );
};

export default Navbar;
