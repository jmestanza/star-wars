import Image from "next/image";
import Movie from "../../../../models/movie.dto";
import Link from "next/link";
import CardLayout from "@/components/layout/CardLayout";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <CardLayout asset={movie} width="w-movie-card" height="h-movie-card">
      <Link href={`/movies/${movie.id}`}>
        <Image
          src={`/img/movies/${movie.id}.jpg`}
          fill // always uses position=absolute
          sizes="100vh"
          alt="name"
        />
      </Link>
    </CardLayout>
  );
};

export default MovieCard;
