import { useEffect } from "react";
import SearchForm from "./SearchForm";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSearchSuggestions } from "../api/gif";

export default function SearchGifs() {
  const { term } = useParams();
  const { data: suggestions, isLoading } = useQuery(["searchSuggestions", term], () =>
    getSearchSuggestions(term)
  );

  useEffect(() => {
    console.log(suggestions);
  }, [suggestions]);

  return <SearchForm term={term} suggestions={suggestions} />;
}
