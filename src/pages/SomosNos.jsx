import React from "react";
import vital from "../assets/vital.jpg";
import joao from "../assets/joao.jpg";
import lucas from "../assets/lucas.jpg";
import maria from "../assets/maria.jpg";
import anderson from "../assets/anderson.jpg";
import { Switch } from "../components/Switch";

export function SomosNos() {
  return (
    <section className="px-4 py-8 md:py-12 pt-12 dark:bg-[rgba(38,64,22,1)]">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 dark:text-white">
            QUEM SOMOS NÓS
          </h2>
          <p className="text-gray-700 max-w-xl mb-4 dark:text-white">
            Somos um grupo comprometido e apaixonado pelo tema do nosso TCC.
            Unimos diferentes habilidades e conhecimentos para desenvolver um
            trabalho de qualidade.
          </p>
        </div>

        {/* Voltar */}
        <div className="flex items-center gap-3">
          <Switch />
          <button className="flex items-center bg-[rgb(217,217,217)] w-28 md:w-32 px-3 py-2 rounded-md dark:bg-[rgba(84,140,49,1)]">
            <a href="/home" className="flex-1 text-left">
              <span className="text-black font-semibold dark:text-white">
                Voltar
              </span>
            </a>
            <span className="text-black font-semibold dark:text-white">→</span>
          </button>
        </div>
      </div>

      {/* Cards de integrantes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
        {[
          { img: vital, name: "Marcos Vinicius" },
          { img: anderson, name: "Anderson Luiz" },
          { img: joao, name: "João Aguiar" },
          { img: lucas, name: "Lucas Lima" },
          { img: maria, name: "Maria Ferreira" },
        ].map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow overflow-hidden flex flex-col"
          >
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-3 flex-1 flex flex-col">
              <h3 className="font-bold">{p.name}</h3>
              <p className="text-green-700 font-semibold">CEO</p>
              <p className="text-sm text-gray-600 mt-2">
                Breve descrição sobre {p.name}.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
