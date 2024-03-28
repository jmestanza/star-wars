import Image from "next/image";
import Starship from "../../../../models/starship.dto";
import Link from "next/link";
import CardLayout from "@/components/layout/CardLayout";

const StarshipCard = ({ starship }: { starship: Starship }) => {
  return (
    // <CardLayout asset={starship} width="w-ship-card" height="h-ship-card">
    <div className="flex items-center flex-col group opacity-80 overflow-hidden m-5 border-solid border-2 border-stone-600 rounded hover:border-yellow-500 hover:opacity-100">
      <Link href={`/starships/${starship.id}`}>
        <div className="grayscale group-hover:grayscale-0 relative cursor-pointer group-hover:scale-110 transition duration-300 ease-in-out w-96 h-72 relative">
          <Image
            src={`/img/starships/${Number(starship.id) + 1}.webp`}
            style={{
              objectFit: "contain",
              zIndex: "-1",
            }}
            fill
            alt="name"
          />

          <div className="flex items-center justify-center group-hover:opacity-100 w-96 h-72 z-10">
            <h1 className="text-white font-semibold text-base font-primary strokeme">
              {starship.name}
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default StarshipCard;
