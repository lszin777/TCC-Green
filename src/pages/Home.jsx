import React from "react";
import Homeimgheader from "../assets/Homeimgheader.png";
import VideoThumb1 from "../assets/video1.png";
import VideoThumb2 from "../assets/video3.png";
import VideoThumb3 from "../assets/video2.png";
import Inseto1 from "../assets/largata.png";
import Inseto2 from "../assets/pulga.png";
import Inseto3 from "../assets/mosca.png";
import { Switch } from "../components/Switch";
import Logo from "../assets/logo.svg";

export function Home() {
  return (
    <div className="min-h-screen">
      
      <header
        className="w-full h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${Homeimgheader})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        
        <section className="relative z-10 px-4 md:px-12 flex items-start justify-between py-4">
          <a href="/home">
            <img src={Logo} alt="Logo" className="h-12 md:h-20" />
          </a>

          
          <nav className="hidden md:flex text-white items-center bg-white/20 backdrop-blur-md p-2 px-6 rounded-full border-2">
            <ul className="flex gap-6 md:gap-20">
              <li>
                <a
                  href="/somosnos"
                  className="font-semibold text-[16px] md:text-[19px]"
                >
                  Somos nós
                </a>
              </li>
              <li>
                <a
                  href="/artigos"
                  className="font-semibold text-[16px] md:text-[19px]"
                >
                  Artigos
                </a>
              </li>
              <li>
                <a
                  href="/itens"
                  className="font-semibold text-[16px] md:text-[19px]"
                >
                  Itens
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <Switch />
            
            <button className="text-white px-4 py-2 rounded-full font-semibold shadow border-2 bg-transparent hidden md:inline-block">
              <a href="/detalhes">Perfil</a>
            </button>
            
            <button className="md:hidden text-white px-3 py-2 rounded-full font-semibold shadow border-2 bg-transparent">
              <a href="/detalhes">Perfil</a>
            </button>
          </div>
        </section>

       
        <div className="relative z-10 text-center text-white flex flex-col items-center justify-center h-[60vh] md:h-screen px-4">
          <h2 className="text-green-600 text-3xl md:text-5xl font-bold">
            Bem-vindo
          </h2>
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Green Guardian
          </h1>
          <p className="mt-4 text-sm md:text-lg max-w-xl md:max-w-2xl mx-auto">
            Este site reúne os principais conteúdos do Trabalho de Conclusão de
            Curso voltado à conservação e manejo sustentável do solo.
          </p>

          <div className="mt-6 flex gap-3 justify-center">
            <button className="px-4 md:px-6 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition">
              Download
            </button>
            <button className="px-4 md:px-6 py-2 rounded-lg border border-white text-white font-semibold hover:bg-white hover:text-black transition">
              <a href="/jogo">Jogo</a>
            </button>
          </div>
        </div>
      </header>

      
      <section className="py-10 px-4 md:py-16 md:px-20 bg-white dark:bg-[rgba(38,64,22,1)]">
        <h2 className="text-2xl md:text-3xl font-bold dark:text-white">
          Green Guardian <span className="text-green-600">Passo a Passo</span>
        </h2>
        <p className="mt-3 text-sm md:text-base text-gray-600 max-w-xl md:max-w-3xl dark:text-white">
          Este guia apresenta o passo a passo do projeto com objetivo de estudar
          e aplicar técnicas que recuperem áreas degradadas, promovendo a
          restauração da qualidade do solo e a sustentabilidade ambiental.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="p-4 bg-gray-100 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-green-600 font-bold text-lg">0{i + 1}</h3>
              <p className="font-semibold mt-2">
                {["Início (Home)", "Sobre o TCC", "Metodologia", "Resultados"][i]}
              </p>
              <p className="text-gray-600 mt-2 text-sm">
                Descrição breve do item {i + 1}.
              </p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="py-10 px-4 md:py-16 md:px-20 bg-gray-100 text-center dark:bg-[rgba(50,64,41,1)]">
        <h2 className="text-2xl md:text-3xl font-bold dark:text-white">
          Video demonstrativo do <span className="text-green-600">Green Guardian</span>
        </h2>
        <p className="mt-3 text-sm md:text-base text-gray-600 max-w-xl md:max-w-3xl mx-auto dark:text-white">
          Nesta seção, disponibilizamos um vídeo explicativo que resume os
          principais pontos do Trabalho de Conclusão de Curso sobre o cuidado
          com o solo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <img
            src={VideoThumb1}
            alt="Vídeo 1"
            className="rounded-2xl w-full h-40 object-cover"
          />
          <img
            src={VideoThumb2}
            alt="Vídeo 2"
            className="rounded-2xl w-full h-40 object-cover"
          />
          <img
            src={VideoThumb3}
            alt="Vídeo 3"
            className="rounded-2xl w-full h-40 object-cover"
          />
        </div>
      </section>

    
      <section className="py-10 px-4 md:py-16 md:px-20 bg-white text-center dark:bg-[rgba(38,64,22,1)]">
        <h2 className="text-2xl md:text-3xl font-bold dark:text-white">
          Entre Asas e Antenas: <span className="text-green-600">Mundo dos Insetos</span>
        </h2>
        <p className="mt-3 text-sm md:text-base text-gray-600 max-w-xl md:max-w-3xl mx-auto dark:text-white">
          Insetos são essenciais para o equilíbrio dos ecossistemas...
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-100 p-4 rounded-2xl shadow text-left">
            <img
              src={Inseto1}
              alt="Lagartas"
              className="rounded-xl mb-3 w-full h-36 object-contain"
            />
            <h3 className="font-bold text-green-600">Lagartas</h3>
            <p className="text-sm text-gray-600 mt-2">
              Velozes lagartas que atacam plantações...
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-2xl shadow text-left">
            <img
              src={Inseto2}
              alt="Pulgões"
              className="rounded-xl mb-3 w-full h-36 object-contain"
            />
            <h3 className="font-bold text-green-600">Pulgões</h3>
            <p className="text-sm text-gray-600 mt-2">
              Os pulgões sugam a seiva das plantas...
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-2xl shadow text-left">
            <img
              src={Inseto3}
              alt="Mosca-branca"
              className="rounded-xl mb-3 w-full h-36 object-contain"
            />
            <h3 className="font-bold text-green-600">Mosca-branca</h3>
            <p className="text-sm text-gray-600 mt-2">
              A mosca-branca provoca sérios danos...
            </p>
          </div>
        </div>
      </section>

      
      <section className="py-8 px-4 md:py-12 md:px-20 bg-green-600 text-center text-white">
        <h2 className="text-xl md:text-3xl font-bold">
          Cuide do Meio Ambiente, <br /> Cuide do Futuro
        </h2>
        <p className="mt-3 max-w-xl mx-auto">
          Cada ação sustentável conta para preservar o planeta.
        </p>
        <div className="mt-4 flex gap-3 justify-center">
          <button className="px-4 py-2 rounded-lg bg-white text-green-600 font-semibold hover:bg-gray-100 transition">
            Download
          </button>
          <button className="px-4 py-2 rounded-lg border border-white text-white font-semibold hover:bg-white hover:text-green-600 transition">
            <a href="/jogo">Jogo</a>
          </button>
        </div>
      </section>

      
      <footer className="bg-black text-white py-8 px-4 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
        <div>
          <p className="font-bold">📞 Contato</p>
          <p className="text-gray-400">+55 (61) 99999-9999</p>
        </div>
        <div>
          <p className="font-bold">✉️ Email</p>
          <p className="text-gray-400">green@guardian.com</p>
        </div>
        <div>
          <p className="font-bold">📍 Localização</p>
          <p className="text-gray-400">São Paulo - SP, Brasil</p>
        </div>
      </footer>
    </div>
  );
}
