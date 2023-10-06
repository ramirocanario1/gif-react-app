import { TbBrandGithub, TbSailboat } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="text-4xl flex justify-between container px-4 py-2">
      <Link to="/" className="text-white flex items-center font-title font-extrabold gap-1 ">
        <span className="text-blue-500">GIF</span>
        <span className="">APP</span>
        <TbSailboat className="text-blue-500" />
      </Link>
      <TbBrandGithub className="text-white" />
    </header>
  );
}
