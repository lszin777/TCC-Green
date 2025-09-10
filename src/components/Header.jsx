import { Link } from "react-router";
import { React } from "react";
import { Switch } from "./Switch";
import Logo from "../assets/logo.svg";


export function Header() {
  return (
    <header className="bg-[url(/background.png)] h-[13rem] bg-cover bg-center px-12 flex justify-between items-start pt-8">

      <Link to="/home">
        <img src={Logo} alt="Logo" className="h-25 w-auto " />
      </Link>

      <nav className=" text-white flex space-x-4 bg-white/20 backdrop-blur-md p-2 px-6 rounded-full border-2 ">
        <ul className="flex gap-20">
          <li>
            <Link to="/somosnos" className="font-semibold text-[19px] ">Somos nós</Link>
          </li>
          <li>
            <Link to="/artigos" className="font-semibold text-[19px]">Artigos</Link>
          </li>
          <li>
            <Link to="/itens" className="font-semibold text-[19px]">Itens</Link>
          </li>
        </ul>
      </nav>


      <div className="flex">
        <Switch />
        <div className="ps-8">

        </div>
        <button className="text-white px-6 py-3 = rounded-full font-semibold shadow border-2 bg-transparent">
          <Link to="/detalhes">
            Perfil
          </Link>
        </button>
      </div>
    </header>
  );
}