import { Link } from "react-router";
import { React } from "react";
import { Switch } from "./Switch";
import Logo from "../assets/logo.svg";


export function Header() {
  return (
    <header className="bg-[url(/background.png)] h-[13rem] bg-cover bg-center px-12 flex justify-between items-start pt-8">

      <a href="/home">
        <img src={Logo} alt="Logo" className="h-25 w-auto " />
      </a>

      <nav className=" text-white flex space-x-4 bg-white/20 backdrop-blur-md p-2 px-6 rounded-full border-2 ">
        <ul className="flex gap-20">
          <li>
            <a href="/somosnos" className="font-semibold text-[19px] ">Somos nós</a>
          </li>
          <li>
            <a href="/artigos" className="font-semibold text-[19px]">Artigos</a>
          </li>
          <li>
            <a href="/itens" className="font-semibold text-[19px]">Itens</a>
          </li>
        </ul>
      </nav>


      <div className="flex">
        <Switch />
        <div className="ps-8">

        </div>
        <button className="text-white px-6 py-3 = rounded-full font-semibold shadow border-2 bg-transparent">
          <a href="/detalhes">
            Perfil
          </a>
        </button>
      </div>
    </header>
  );
}