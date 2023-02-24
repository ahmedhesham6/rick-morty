import Image from "next/image";
import { type Character } from "../graphql/client";

const CharacterCard = ({ character }: { character?: Character | null }) => {
  return (
    <div
      key={character?.id}
      className="m-1 flex w-2/4 flex-col items-center rounded-lg border border-gray-200 bg-white p-2 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row"
    >
      <Image
        className="min-h-full w-1/2 rounded-t-lg object-cover"
        alt="character image"
        width={256}
        height={256}
        src={character?.image ?? ""}
      />
      <div className="flex min-h-full flex-col justify-between p-4 leading-normal">
        <section>
          <h2 className=" text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {character?.name}
          </h2>
          <p className="ml-1 mb-3 font-normal text-gray-700 dark:text-gray-400">
            {character?.status} - {character?.species}
          </p>
        </section>

        <section>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Origin:
          </p>
          <h4 className="text-l mb-2  font-semibold tracking-tight text-gray-900 dark:text-white">
            {character?.origin?.name}
          </h4>
        </section>

        <section>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Last known location:
          </p>
          <h4 className="text-l mb-2  font-semibold tracking-tight text-gray-900 dark:text-white">
            {character?.location?.name}
          </h4>
        </section>
      </div>
    </div>
  );
};

export default CharacterCard;
