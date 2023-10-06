import { useEffect } from "react";
import SearchForm from "./SearchForm";
import { useParams } from "react-router-dom";

export default function SearchGifs() {
  const params = useParams();

  useEffect(() => {
    console.log(params);
  }, [params]);

  return <SearchForm />;
}
