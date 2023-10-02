import { useForm } from "react-hook-form";

export default function SearchForm({ setSearch }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm();

  const onSubmit = handleSubmit(async (formData) => {
    setSearch(formData.search);
  });

  return (
    <form onSubmit={onSubmit} className="bg-color3 flex items-center flex-col p-5">
      <div className="p-3 bg-color3 text-white flex flex-col gap-2">
        <label htmlFor="search">Buscar gif</label>
        <input
          type="text"
          placeholder="Perritos"
          className="px-4 p-2 rounded-md shadow-lg w-72 text-color4"
          {...register("search")}
        />
      </div>
      <button className="bg-color1 text-color4 p-2 w-52 rounded-xl">Buscar GIFS!</button>
    </form>
  );
}
