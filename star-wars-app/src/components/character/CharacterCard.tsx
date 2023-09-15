import Character from "../../../models/character.dto";

interface CharacterProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterProps) => {
  const borderSyle = "";
  const hoverStyle =
    "bg-gray-50/75 cursor-pointer group-hover:scale-110 transition duration-300 ease-in-out";
  // const characterUrl = character.url;
  // const id = characterUrl
  //   .replace("https://swapi.dev/api/people/", "")
  //   .replace("/", "");
  return (
    <div className="flex items-center flex-col group opacity-80 overflow-hidden m-5 border-solid border-2 border-stone-600 rounded hover:border-yellow-500 hover:opacity-100">
      <div
        className={
          "bg-[url('/img/luke.jpeg')] bg-cover w-full grayscale group-hover:grayscale-0 h-[200px] w-[333px] relative" +
          hoverStyle
        }
      >
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
