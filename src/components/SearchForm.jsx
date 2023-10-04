import { useForm } from "react-hook-form";
import { TbSearch } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

export default function SearchForm({ setSearch }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (formData) => {
    setSearch(formData.search);
    navigate(`/search/${formData.search}`);
  });

  return (
    <form onSubmit={onSubmit} className="bg-color4 flex items-center flex-col p-5 rounded-xl">
      <div className="p-3 bg-color4 text-white flex flex-col gap-2 w-full max-w-4xl">
        <label htmlFor="search">Buscar gifs</label>
        <div className="flex">
          <input
            type="text"
            placeholder="Perritos"
            className="w-full px-5 py-3 text-lg text-black rounded-tl-lg rounded-bl-lg focus:outline-none"
            {...register("search")}
          />
          <button className="bg-color1 text-color4 w-fit rounded-tr-lg rounded-br-lg text-2xl p-4 bg-gradient-to-tr from-color1 to-color2">
            <TbSearch />
          </button>
        </div>
      </div>
    </form>
  );
}
