import Image from "next/image";
import Link from "next/link";
import Character from "../../../../models/character.dto";
import CardLayout from "../../layout/CardLayout";

const CharacterCard = ({ character }: { character: Character }) => {
  return (
    <CardLayout asset={character}>
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
