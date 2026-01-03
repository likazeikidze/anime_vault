import Image from "next/image";

import { MotionDiv } from "./MotionDiv";

export interface AnimeCardProps {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Props {
  anime: AnimeCardProps;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const AnimeCard = ({ anime, index }: Props) => {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: index * 0.25, ease: "easeInOut" }}
      viewport={{ amount: 0 }}
      className="max-w-sm rounded w-full relative"
    >
      <div className="relative w-full aspect-4/6">
        <Image
          src={`https://shikimori.one${anime.image.original}`}
          alt={anime.name}
          fill
          className="rounded-xl"
        />
      </div>

      <div className="flex flex-col gap-3 py-4">
        <div className="flex justify-between items-center gap-1">
          <h2 className="text-white font-bold text-xl line-clamp-1 w-full">
            {anime.name}
          </h2>

          <div className="px-2 py-1 rounded-sm bg-[#212328]">
            <p className="text-white font-bold text-sm">{anime.kind}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-2 items-center">
            <Image
              src="/icons/episodes.svg"
              alt="anime"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-white font-bold">
              {anime.episodes || anime.episodes_aired}
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <Image
              src="/icons/star.svg"
              alt="anime"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-[#FFAD49] font-bold">{anime.score}</p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default AnimeCard;
