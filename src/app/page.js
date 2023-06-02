const API_KEY = process.env.API_KEY;
// const API_KEY = '96cd2dbc32e3243b7bd886988cee66f4'
import Results from "@/components/Results";

export default async function Home({ searchParams }) {
  //here searchParams.genre would be fetched if undefined would go for fetchTrending
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(`https://api.themoviedb.org/3/${genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"}?api_key=${API_KEY}`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  // const res = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`)
  // convert the response into json format and save onto data 
  const data = await res.json();
  console.log('***************************************************')
  const results = data.results;
  // console.log('here is the result form data', results);
  // console.log('Checking resonse data on server side', data);
  return (
    <div className=''>
      {/* <h1 className='text-white'>HOME</h1> */}
      <Results results={results} />
    </div>
  )
}

