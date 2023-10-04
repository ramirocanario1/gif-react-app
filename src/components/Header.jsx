import { TbBrandGithub, TbSailboat } from "react-icons/tb";

export default function Header() {
  return (
    <header className="text-4xl flex justify-between container px-4 py-2">
      <h1 className="text-white flex items-center font-title font-extrabold gap-1 ">
        <span className="text-blue-500">GIF</span>
        <span className="">APP</span>
        <TbSailboat className="text-blue-500" />
      </h1>
      <TbBrandGithub className="text-white" />
    </header>
  );
}
