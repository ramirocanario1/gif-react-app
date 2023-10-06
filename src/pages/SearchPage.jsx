import React from "react";
import { useParams } from "react-router-dom";
import SearchResults from "../components/SearchResults";

export default function SearchPage() {
  const { term } = useParams();
  return <SearchResults search={term} />;
}
