import Categories from "./components/Categories";
import Header from "./components/Header";
import SearchGifs from "./components/SearchGifs";
import TrendingSearchs from "./components/TrendingSearchs";

export default function App() {
  return (
    <>
      <Header />
      <SearchGifs />
      <TrendingSearchs />
      <Categories />
    </>
  );
}
