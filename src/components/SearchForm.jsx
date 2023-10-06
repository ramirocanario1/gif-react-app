import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TbHistory, TbSearch } from "react-icons/tb";
import { Link, useNavigate, useParams } from "react-router-dom";
import nextId from "react-id-generator";

export default function SearchForm() {
  const [searchs, setSearchs] = useState([]);

  const { term } = useParams();

  const { register, handleSubmit, setValue } = useForm();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (formData) => {
    setSearchs([formData.search, ...searchs]);
    if (term) {
      setValue("search", term);
    }
    navigate(`/search/${formData.search}`);
  });

  useEffect(() => {
    console.log(term);
  }, [term]);

  return (
    <form onSubmit={onSubmit} className="bg-color4 flex items-center flex-col p-5 rounded-xl">
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
