import Image from "next/image";
import { type Character } from "../graphql/client";

const CharacterCard = ({ character }: { character?: Character | null }) => {
  return (
    <div
      key={character?.id}
      className="m-1 flex w-2/3 flex-col items-center rounded-lg border border-gray-200 bg-white p-2 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 sm:w-1/3 md:w-1/3 lg:w-5/12 lg:flex-row"
    >
      <Image
        className="min-w-full rounded-t-lg  object-cover lg:min-h-full lg:min-w-0"
        alt="character image"
        width={200}
        height={200}
        src={character?.image ?? ""}
      />
      <div className="flex flex-col justify-between p-4 leading-normal sm:h-1/2 lg:min-h-full">
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
