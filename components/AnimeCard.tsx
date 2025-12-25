"use client";

import Image from "next/image";
import { useState } from "react";

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

const AnimeCard = ({ anime }: Props) => {
  const [imgSrc, setImgSrc] = useState(anime.image.original);

  return (
    <div className="max-w-sm rounded w-full relative">
      <div className="relative w-full aspect-4/6">
        <Image
          src={imgSrc}
          alt={anime.name}
          fill
          className="rounded-xl"
          onError={() => setImgSrc("/images/placeholder.jpg")}
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
    </div>
  );
};

export default AnimeCard;
