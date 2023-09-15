import Image from "next/image";
import Movie from "../../../models/movie.dto";

interface MovieProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieProps) => {
  return (
    <div className="flex items-center flex-col group opacity-80 overflow-hidden m-5 border-solid border-2 border-stone-600 rounded hover:border-yellow-500 hover:opacity-100 bg-black">
      <div className="grayscale group-hover:grayscale-0 relative bg-gray-50/75 cursor-pointer group-hover:scale-110 transition duration-300 ease-in-out">
        <Image
          src={`/img/movies/${movie.id}.jpg`}
          width="430"
          height="200"
          alt="name"
        />
      </div>
    </div>
  );
};

export default MovieCard;
