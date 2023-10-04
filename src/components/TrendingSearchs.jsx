import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTrendingSearchs } from "../api/gif";
import { TbTrendingUp } from "react-icons/tb";

export default function TrendingSearchs() {
  const { data, isLoading } = useQuery(["trendingSearchs"], () => getTrendingSearchs());

  return (
    <section className="border-[1px] border-color1 flex flex-col bg-color4 items-center p-4 py-8 gap-3 rounded-lg shadow-lg m-2 shadow-color1">
      <h1 className="text-2xl font-bold text-color1 flex items-center gap-2">
        <TbTrendingUp /> Trending
      </h1>

      <div className="flex flex-wrap justify-center gap-2 text-white items-center">
        {data?.map((s) => (
          <span
            className="hover:text-color1 transition-colors cursor-pointer hover:underline underline-offset-4 text-center"
            key={s}
          >
            "{s}"
          </span>
        ))}
      </div>
    </section>
  );
}
