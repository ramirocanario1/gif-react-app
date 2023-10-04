import React from "react";
import Categories from "../components/Categories";
import TrendingSearchs from "../components/TrendingSearchs";
import styles from "./Home.module.css";
import TrendingGifs from "../components/TrendingGifs";
import GetRandomGifs from "../components/GetRandomGifs";

export default function Home() {
  return (
    <div className={styles.container}>
      <aside>
        <TrendingSearchs />
      </aside>
      <main className="flex flex-col gap-5">
        <TrendingGifs />
        <GetRandomGifs />
      </main>
      <aside>
        <Categories />
      </aside>
    </div>
  );
}
