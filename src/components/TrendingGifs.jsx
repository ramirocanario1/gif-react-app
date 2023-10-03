import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTrendingGifs } from "../api/gif";
import styles from "./TrendingGifs.module.css";

export default function TrendingGifs() {
  const { data, isLoading } = useQuery(["trendingGifs"], () => getTrendingGifs());

  return (
    <section className="relative">
      <div className={styles.container}>
        <h1 className="text-2xl font-bold">🔥 Trending GIFs</h1>
        <div className="flex flex-wrap overflow-y-hidden gap-2 justify-evenly h-[400px]">
          {data?.map((g) => (
            <img key={g.id} src={g.url} className="h-[150px] hover:blur-sm transition-all" />
          ))}
        </div>
      </div>
      <span className="absolute bottom-2 right-2 text-white">Ver más ></span>
    </section>
  );
}
