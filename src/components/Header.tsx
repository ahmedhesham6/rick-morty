import Image from "next/image";

const Header = () => {
  return (
    <section className="sticky top-0 flex min-w-full flex-col items-center justify-center bg-white">
      <h1 className="z-10 p-20 text-2xl font-black sm:text-6xl md:text-6xl lg:text-8xl">
        Rick and Morty
      </h1>
      <Image
        priority
        className="absolute bottom-0 h-full w-full"
        src="/heroImage.svg"
        height={32}
        width={32}
        alt="Rick and Morty"
      />
    </section>
  );
};

export default Header;
