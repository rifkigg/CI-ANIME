"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { IoIosSearch } from "react-icons/io";

const InputSearch = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = (event: any) => {
    if (event.key === "Enter" || event.type === "click") {
      const keyword:string | undefined = searchRef.current?.value;
      if (keyword === "" || keyword?.trim() === "" || keyword && keyword.length <= 2) {
        alert("Please enter at least 3 characters");
        return
      };
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className={`relative`}>
      <input
        type="text"
        placeholder="Search..."
        className={`p-2 rounded-md w-full`}
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button onClick={handleSearch} className="absolute top-2.5 right-2">
        <IoIosSearch className=" text-xl" />
      </button>
    </div>
  );
};

export default InputSearch;
