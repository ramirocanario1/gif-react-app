import React from "react";
import { useParams } from "react-router-dom";
import SearchResults from "../components/SearchResults";

export default function Search() {
  const { term } = useParams();
  return <SearchResults search={term} />;
}
