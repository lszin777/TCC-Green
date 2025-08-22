// src/pages/Home.jsx
import Homeimgheader from "../assets/Homeimgheader.png";
import VideoThumb1 from "../assets/video1.png";
import VideoThumb2 from "../assets/video3.png";
import VideoThumb3 from "../assets/video2.png";
import Inseto1 from "../assets/largata.png";
import Inseto2 from "../assets/pulga.png";
import Inseto3 from "../assets/mosca.png";

import { Link } from "react-router";
import { React } from "react";
import { Switch } from "../components/Switch";
import Logo from "../assets/logo.svg";

export function Home() {
  return (
    <div>
        <div className="w-full min-h-screen">
          
      {/* Header */}
      <header
        className="w-full h-[80vh] bg-cover bg-center relative flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${Homeimgheader})` }}>
        
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-green-600">
            Bem-vindo
          </h2>
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Green guardian
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Este site reúne os principais conteúdos do Trabalho de Conclusão de
            Curso voltado à conservação e manejo sustentável do solo.
          </p>

          <div className="mt-6 flex gap-4 justify-center">
            <button className="px-6 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition">
              Download
            </button>
            <button className="px-6 py-2 rounded-lg border border-white text-white font-semibold hover:bg-white hover:text-black transition">
              <a href="/jogo">
                Jogo
              </a>
            </button>
          </div>
        </div>
      </header>

      {/* Passo a passo */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold">
          Green Guardian{" "}
          <span className="text-green-600">Passo a Passo</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl">
          Este guia apresenta o passo a passo do projeto com objetivo de estudar
          e aplicar técnicas que recuperem áreas degradadas, promovendo a
          restauração da qualidade do solo e a sustentabilidade ambiental.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-green-600 font-bold text-xl">01</h3>
            <p className="font-semibold mt-2">1. Início (Home)</p>
            <p className="text-gray-600 mt-2 text-sm">
              Na página inicial, você encontra uma breve introdução ao projeto.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-green-600 font-bold text-xl">02</h3>
            <p className="font-semibold mt-2">2. Sobre o TCC</p>
            <p className="text-gray-600 mt-2 text-sm">
              Nesta seção, explicamos o tema, o problema abordado, a justificativa
              e os objetivos da pesquisa.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-green-600 font-bold text-xl">03</h3>
            <p className="font-semibold mt-2">3. Metodologia</p>
            <p className="text-gray-600 mt-2 text-sm">
              Aqui são descritos os métodos utilizados para realizar a remediação
              do solo, como testes.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-green-600 font-bold text-xl">04</h3>
            <p className="font-semibold mt-2">4. Resultados e Discussão</p>
            <p className="text-gray-600 mt-2 text-sm">
              Apresenta os dados obtidos durante a execução do projeto,
              acompanhados de gráficos.
            </p>
          </div>
        </div>
      </section>

      {/* Vídeo demonstrativo */}
      <section className="py-16 px-6 md:px-20 bg-gray-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Video demonstrativo do{" "}
          <span className="text-green-600">Green Guardian</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Nesta seção, disponibilizamos um vídeo explicativo que resume os
          principais pontos do Trabalho de Conclusão de Curso sobre o cuidado com
          o solo. O material visual reforça a importância da preservação do solo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <img src={VideoThumb1} alt="Vídeo 1" className="rounded-2xl shadow" />
          <img src={VideoThumb2} alt="Vídeo 2" className="rounded-2xl shadow" />
          <img src={VideoThumb3} alt="Vídeo 3" className="rounded-2xl shadow" />
        </div>
      </section>

      {/* Mundo dos insetos */}
      <section className="py-16 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Entre Asas e Antenas:{" "}
          <span className="text-green-600">Mundo dos Insetos</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Insetos são essenciais para o equilíbrio dos ecossistemas,
          desempenhando funções fundamentais na polinização, decomposição e
          controle biológico, mas também podem causar grandes danos à saúde e à
          agricultura.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <img src={Inseto1} alt="Lagartas" className="rounded-xl mb-4" />
            <h3 className="font-bold text-lg text-green-600">Lagartas</h3>
            <p className="text-gray-600 text-sm mt-2">
              Velozes lagartas que atacam plantações, consumindo folhas e
              prejudicando a produtividade agrícola.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <img src={Inseto2} alt="Pulgões" className="rounded-xl mb-4" />
            <h3 className="font-bold text-lg text-green-600">Pulgões</h3>
            <p className="text-gray-600 text-sm mt-2">
              Os pulgões sugam a seiva das plantas, causando enfraquecimento,
              transmissão de vírus e comprometendo o crescimento saudável.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <img src={Inseto3} alt="Mosca-branca" className="rounded-xl mb-4" />
            <h3 className="font-bold text-lg text-green-600">Mosca-branca</h3>
            <p className="text-gray-600 text-sm mt-2">
              A mosca-branca provoca sérios danos em hortaliças e plantas
              ornamentais, espalhando pragas e reduzindo a produção.
            </p>
          </div>
        </div>
      </section>

      {/* Rodapé verde */}
      <section className="py-16 px-6 md:px-20 bg-green-600 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold">
          Cuide do Meio Ambiente, <br /> Cuide do Futuro
        </h2>
        <p className="mt-4 max-w-3xl mx-auto">
          Cada ação sustentável conta para preservar o planeta. <br /> Com
          pequenas atitudes, podemos garantir um futuro mais verde e saudável.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <button className="px-6 py-2 rounded-lg bg-white text-green-600 font-semibold hover:bg-gray-100 transition">
            Download
          </button>
          <button className="px-6 py-2 rounded-lg border border-white text-white font-semibold hover:bg-white hover:text-green-600 transition">
          <a href="/jogo">
                Jogo
              </a>
          </button>
        </div>
      </section>

      {/* Rodapé preto */}
      <footer className="bg-black text-white py-10 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
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
    </div>
  );
}
