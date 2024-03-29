import Image from "next/image";
import Starship from "../../../../models/starship.dto";
import Link from "next/link";
import CardLayout from "@/components/layout/CardLayout";

const StarshipCard = ({
  starship,
  imgIdx,
}: {
  starship: Starship;
  imgIdx: number;
}) => {
  const apiIdx: number[] = [
    Number.MAX_VALUE,
    2,
    3,
    5,
    9,
    10,
    11,
    12,
    13,
    15,
    17,
    21,
    22,
    23,
    27,
    28,
    29,
    31,
    32,
    39,
    40,
    41,
    43,
    47,
    48,
    49,
    52,
    58,
    59,
    61,
    63,
    64,
    65,
    66,
    68,
    74,
    75,
  ];

  return (
    <CardLayout asset={starship} width="w-ship-card" height="h-ship-card">
      <Link href={`/starships/${starship.id}`}>
        <Image
          src={`/img/starships/${apiIdx.findIndex(
            (el) => el == Number(starship.id)
          )}.webp`}
          style={{
            objectFit: "contain",
            zIndex: "-1",
          }}
          fill
          alt="name"
        />

        <div className="flex items-center justify-around group-hover:opacity-100 z-10 h-ship-card w-ship-card">
          <div></div>
          <h1 className="text-white font-semibold text-base font-primary strokeme">
            {starship.name}
          </h1>
        </div>
      </Link>
    </CardLayout>
  );
};

export default StarshipCard;
