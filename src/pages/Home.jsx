import React from "react";
import Categories from "../components/Categories";
import TrendingSearchs from "../components/TrendingSearchs";
import styles from "./Home.module.css";
import TrendingGifs from "../components/TrendingGifs";

export default function Home() {
  return (
    <div className={styles.container}>
      <aside>
        <TrendingSearchs />
      </aside>
      <main>
        <TrendingGifs />
      </main>
      <aside>
        <Categories />
      </aside>
    </div>
  );
}
