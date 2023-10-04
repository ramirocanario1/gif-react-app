import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api/gif";
import addEmojis from "../utils/addEmojis";
import { TbCategory2 } from "react-icons/tb";

export default function Categories() {
  const { data, isLoading } = useQuery(["categories"], () => getCategories());

  return (
    <section className="bg-color4 flex flex-col items-center p-4 py-8 gap-3 rounded-lg shadow-lg m-2 border-[1px] border-color2 shadow-color2">
      <h1 className="text-2xl font-bold text-color2 flex gap-2 items-center">
        <TbCategory2 /> Categories{" "}
      </h1>

      <div className="flex flex-wrap justify-center gap-2 text-white items-center">
        {addEmojis(data)?.map((s) => (
          <span
            className="hover:text-color2 transition-colors cursor-pointer hover:underline underline-offset-4"
            key={s}
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
