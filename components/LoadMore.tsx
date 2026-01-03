"use client";

import { fetchAnime } from "@/app/action";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export type CardElement = JSX.Element;

const LoadMore = () => {
  const { ref, inView } = useInView();
  const [data, setData] = useState<CardElement[]>([]);
  const [page, setPage] = useState(2);

  useEffect(() => {
    if (!inView) return;
    fetchAnime(page).then((res) => {
      setData((prev) => [...prev, ...res]);
      setPage((prev) => prev + 1);
    });
  }, [inView]);

  return (
    <>
      <section className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data}
      </section>

      <div className="flex justify-center items-center h-32" ref={ref}>
        <div className="w-12 h-12 border-4 border-red-700 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </>
  );
};

export default LoadMore;
