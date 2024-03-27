import "react-loading-skeleton/dist/skeleton.css";
import Character from "../../../models/character.dto";
import CardLayout from "../layout/CardLayout";
import Skeleton from "../skeleton/Skeleton";
import Link from "next/link";
import Image from "next/image";

const CharacterCard = ({ character }: { character: Character }) => {
  return !character.loaded ? (
    <Skeleton />
  ) : (
    <CardLayout>
      <Link href={`/characters/${character.id}`}>
        <Image
          src={`/img/people/${character.id}.jpg`}
          fill // always uses position=absolute
          alt="name"
        />
      </Link>
      <div className="absolute inset-y-2/4 right-5 group-hover:opacity-100">
        <h1 className="text-white font-semibold text-base font-primary">
          {character.name}
        </h1>
      </div>
    </CardLayout>
  );
};

export default CharacterCard;
