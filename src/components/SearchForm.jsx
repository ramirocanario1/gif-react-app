import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TbHistory, TbSearch } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import nextId from "react-id-generator";

export default function SearchForm({ term, suggestions }) {
  const [searchs, setSearchs] = useState([]);

  const { register, handleSubmit, setValue } = useForm();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (formData) => {
    if (formData.search.length > 0) {
      setSearchs([formData.search, ...searchs]);
      navigate(`/search/${formData.search}`);
    }
  });

  useEffect(() => {
    if (term) {
      setValue("search", term);
    }
  }, [term]);

  return (
    <form onSubmit={onSubmit} className="bg-color4 flex items-center flex-col p-5 rounded-xl mb-6">
      <div className="p-3 bg-color4 text-white flex flex-col gap-2 w-full max-w-4xl">
        <label htmlFor="search">Search gifs</label>
        <div className="flex">
          <input
            type="text"
            placeholder="River Plate"
            className="w-full px-5 py-3 text-lg text-black rounded-tl-lg rounded-bl-lg focus:outline-none"
            {...register("search")}
          />
          <button className="bg-color1 text-color4 w-fit rounded-tr-lg rounded-br-lg text-2xl p-4 bg-gradient-to-tr from-color1 to-color2">
            <TbSearch />
          </button>
        </div>
        <div className="text-gray-400 flex gap-4 text-clip overflow-x-hidden">
          {searchs.map((s) => (
            <RecentSearch search={s} key={nextId("recent-")} />
          ))}
        </div>
        <div className=" rounded-lg p-5 shadow-2xl border-t-4 border-color1 mt-3">
          <h2 className="flex items-center gap-2 text-xl">
            <BsStars className="text-color2" /> Search suggestions...
          </h2>
          <div className="flex items-center gap-3 flex-wrap mt-5">
            {suggestions?.map((s) => (
              <SearchSuggestion key={s.name} search={s.name} />
            ))}
          </div>
        </div>
      </div>
    </form>
  );
}

function RecentSearch({ search }) {
  return (
    <Link to={`/search/${search}`} className="flex items-center gap-1 text-md flex-shrink-0">
      <TbHistory />
      {search}
    </Link>
  );
}

function SearchSuggestion({ search }) {
  return (
    <Link to={`/search/${search}`} className="flex items-center gap-1 text-md flex-shrink-0">
      <TbSearch className="text-color1" />
      {search}
    </Link>
  );
}
