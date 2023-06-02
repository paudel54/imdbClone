"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  //   function handleSubmit(e) {

  //   }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    // console.log(search);
    setSearch("");
    router.push(`/search/${search}`);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex max-w-6xl mx-auto justify-between items-center px-5"
      >
        <input
          // value will be updated as user gives an input into input fields
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search Movies.."
          className="w-full h-14 rounded-sm placeholder-gray-500  outline-none
          bg-transparent flex-1"
        />
        <button
          disabled={!search}
          type="Submit"
          className="text-amber-600 disabled:text-gray-400"
        >
          Search
        </button>
      </form>
    </div>
  );
}
