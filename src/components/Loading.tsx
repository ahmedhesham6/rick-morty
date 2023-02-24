import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex min-w-full flex-col items-center justify-center ">
      <span className="leading-non sticky top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  p-0.5 px-2 text-center text-xs font-medium">
        <Image
          className="mb-2"
          priority
          src="/heroImage.svg"
          height={64}
          width={64}
          alt="Rick and Morty"
        />
      </span>
    </div>
  );
};

export default Loading;
