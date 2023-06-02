//no UseEffect, hooks, useState so It's ServerSide rendering:
import Results from "@/components/Results";
export default async function Searchpage({ params }) {
  //   console.log("here goes paramas", params);
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}`
  );
  if (!res.ok) {
    throw new Error("Error Fetching Data");
  }
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results && results.length == 0 && (
        <h1 className="text-center p-6">No results Found</h1>
      )}

      {results && <Results results={results} />}
    </div>
  );
}

// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
// https://developers.themoviedb.org/3/getting-started/images
