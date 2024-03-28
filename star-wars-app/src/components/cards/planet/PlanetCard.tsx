import Link from "next/link";
import Planet from "../../../../models/planet.dto";
import Image from "next/image";
import CardLayout from "@/components/layout/CardLayout";

const PlanetCard = ({ planet }: { planet: Planet }) => {
  return (
    <CardLayout asset={planet} width="w-planet-card" height="h-planet-card">
      <Link href={`/planets/${planet.id}`}>
        <Image
          src={`https://starwars-visualguide.com/assets/img/planets/${planet.id}.jpg`}
          width="430"
          height="200"
          alt="name"
        />
      </Link>

      <div className="absolute inset-y-2/4 right-5 group-hover:opacity-100">
        <h1 className="text-white font-semibold text-base font-primary">
          {planet.name}
        </h1>
      </div>
    </CardLayout>
  );
};

export default PlanetCard;
