import { useState } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

export default function SearchGifs() {
  const [search, setSearch] = useState("");

  return (
    <>
      <SearchForm setSearch={setSearch} />
      <SearchResults search={search} />
    </>
  );
}
