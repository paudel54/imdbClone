import Link from "next/link";
import Image from "next/image";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
const Card = ({ key, result }) => {
  //   console.log(
  //     "***************************************************Here is result****************************************************"
  //   );
  // console.log(result);
  return (
    <div
      className="cursor-pointer sm:border sm:border-slate-400 transition-shadow duration-200 
        sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:m-2
        group
        "
    >
      {/* <div>{result.id}</div> */}
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          //   placeholder="blur"
          //   blurDataURL="/loading.svg"
          alt="image is not avialable"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <p className="p-2">
          <p className="line-clamp-2">{result.overview}</p>
          {/* ||or operator to keep it as fallback */}
          <h2 className="truncate text-lg font-bold">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <BsFillHandThumbsUpFill className="h-5 mr-1 ml-3" />
            {result.vote_count}
          </p>
        </p>
      </Link>
    </div>
  );
};

export default Card;
// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
// https://developers.themoviedb.org/3/getting-started/images
