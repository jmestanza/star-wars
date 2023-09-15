import Character from "../../../models/character.dto";
import Image from "next/image";

interface CharacterProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterProps) => {
  const hoverStyle =
    "bg-gray-50/75 cursor-pointer group-hover:scale-110 transition duration-300 ease-in-out";

  return (
    <div className="flex items-center flex-col group opacity-80 overflow-hidden m-5 border-solid border-2 border-stone-600 rounded hover:border-yellow-500 hover:opacity-100 bg-black">
      <div
        className={`grayscale group-hover:grayscale-0 relative` + hoverStyle}
      >
        <Image
          src={`/img/people/${character.id}.jpg`}
          width="430"
          height="200"
          alt="name"
        />
        <div className="absolute inset-y-2/4 right-5 group-hover:opacity-100">
          <h1 className="text-white font-semibold text-base font-primary">
            {character.name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
