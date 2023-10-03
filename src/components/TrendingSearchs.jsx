import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTrendingSearchs } from "../api/gif";

export default function TrendingSearchs() {
  const { data, isLoading } = useQuery(["trendingSearchs"], () => getTrendingSearchs());

  return (
    <section className="bg-color4 flex flex-col items-center p-4 py-8 gap-3 rounded-lg shadow-lg m-2">
      <h1 className="text-2xl font-bold text-color1">🔍 Trending 🔥</h1>

      <div className="flex flex-wrap justify-center gap-2 text-color2 items-center">
        {data?.map((s) => (
          <span
            className="hover:text-color1 transition-colors cursor-pointer hover:underline underline-offset-4"
            key={s}
          >
            "{s}"
          </span>
        ))}
      </div>
    </section>
  );
}
