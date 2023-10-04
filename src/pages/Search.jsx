import React from "react";
import { useParams } from "react-router-dom";

export default function Search() {
  const { term } = useParams();
  console.log(term);
  return <div>Search</div>;
}
