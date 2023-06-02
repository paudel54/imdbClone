// handles error

"use client";
import { useEffect } from "react";
// // On contarty to react next has error handling procedure that accepts multiple props
const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong</h1>
      <button
        className="bg-gray-200 hover:bg-amber-400 animate- text-black m-4 rounded-xl p-3 "
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
