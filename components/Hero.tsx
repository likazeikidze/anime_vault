import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <header className="bg-hero bg-center bg-cover bg-no-repeat py-16 px-8 sm:p-16 flex justify-center items-center w-full sm:gap-16 gap-0">
        <div className="flex flex-1 flex-col gap-10">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={101}
            height={96}
            className="object-contain"
          />

          <h1 className="text-5xl sm:text-6xl text-white font-bold lg:max-w-lg leading-[120%]">
            Explore The <span className="red-gradient">Diverse Realms</span> of
            Anime Magic
          </h1>
        </div>

        <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
          <Image
            src="/images/anime.png"
            alt="anime"
            fill
            className="object-contain"
          />
        </div>
      </header>
    </div>
  );
};

export default Hero;
