import React from "react";
import vital from "../assets/vital.jpg";
import joao from "../assets/joao.jpg";
import lucas from "../assets/lucas.jpg";
import maria from "../assets/maria.jpg";
import anderson from "../assets/anderson.jpg";

export function SomosNos() {
  return (
    <section className="px-8 py-12 pt-20">
      {/* Título e descrição */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold mb-4">QUEM SOMOS NÓS</h2>
          <p className="text-gray-700 max-w-2xl mb-8 pt-7">
            Somos um grupo comprometido e apaixonado pelo tema do nosso TCC.
            Unimos diferentes habilidades e conhecimentos para desenvolver um
            trabalho de qualidade.
          </p>
        </div>

        {/* Botão Voltar */}
        <div className="flex justify-center space-x-4 mt-12">
          <button className="flex items-center justify-between bg-[rgb(217,217,217)] w-32 px-4 py-2 rounded-md">
            <a href="/home" className="flex-1 text-left">
              <span className="text-black font-semibold">Voltar</span>
            </a>
            <span className="text-black font-semibold">→</span>
          </button>
        </div>
      </div>

      {/* Grid de cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-7 mt-12">
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <img
            src={vital}
            alt="Marcos Vinicius"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold">Marcos Vinicius</h3>
            <p className="text-green-700 font-semibold">CEO</p>
            <p className="text-sm text-gray-600 mt-2">
              O aprendizado nos transforma.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <img
            src={anderson}
            alt="Anderson Luiz"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold">Anderson Luiz</h3>
            <p className="text-green-700 font-semibold">CEO</p>
            <p className="text-sm text-gray-600 mt-2">
              Quem tem propósito suporta o processo.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <img
            src={joao}
            alt="João Aguiar"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold">João Aguiar</h3>
            <p className="text-green-700 font-semibold">CEO</p>
            <p className="text-sm text-gray-600 mt-2">
              Experiência como desenvolvedor full-stack com foco em React, MySQL e C++.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <img
            src={lucas}
            alt="Lucas Lima"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold">Lucas Lima</h3>
            <p className="text-green-700 font-semibold">CEO</p>
            <p className="text-sm text-gray-600 mt-2">
              Jesus is the way, the truth, and the life.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <img
            src={maria}
            alt="Maria Ferreira"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold">Maria Ferreira</h3>
            <p className="text-green-700 font-semibold">CEO</p>
            <p className="text-sm text-gray-600 mt-2">
              A coragem não é a ausência do medo, mas sim o passo dado através dele.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
