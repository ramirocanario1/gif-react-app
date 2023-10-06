import React from "react";
import { TbArrowsShuffle } from "react-icons/tb";

export default function GetRandomGifs() {
  return (
    <section className="bg-color4 flex flex-col gap-4 p-4 rounded-lg border-transparent border-b-purple-500 border-b-8">
      <h1 className="text-2xl font-bold flex items-center gap-2 text-white">
        <TbArrowsShuffle className="text-purple-500" />I want something{" "}
        <span className="text-purple-500">RANDOM</span>
      </h1>
      <button className="text-white p-3 bg-purple-500 font-bold w-fit self-center">RANDOM GIFs!</button>
    </section>
  );
}
