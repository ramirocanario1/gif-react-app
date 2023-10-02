import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getGifs } from "../api/gif";

export default function SearchResults({ search }) {
  const { data, isLoading } = useQuery(["searchGifs", search], () => getGifs(search), {
    enabled: search.length > 2,
  });
  const [gifs, setGifs] = useState();

  useEffect(() => {
    if (data?.data) setGifs(data.data.data);
  }, [data]);

  if (isLoading) return <span>Cargando!</span>;

  return (
    <div className="flex flex-wrap justify-evenly bg-color5 gap-2">
      {gifs?.map((gif) => (
        <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
      ))}
    </div>
  );
}
