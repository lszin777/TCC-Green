import React from "react";
import game from "../assets/game.jpg";

export function Jogo() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-[rgba(38,64,22,1)]">
      <main className="flex flex-col items-center bg-white rounded-t-2xl p-6 md:p-8 -mt-4 dark:bg-[rgba(38,64,22,1)]">
        <h1 className="text-2xl md:text-3xl font-bold text-black mb-4 dark:text-white">
          Jogo
        </h1>
        <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative w-full">
            <img
              src={game}
              alt="Gameplay"
              className="rounded-lg shadow-lg object-cover w-full h-56 md:h-80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/90 rounded-full p-3 md:p-4 shadow-lg">
                ▶
              </button>
            </div>
          </div>

          <div className="text-gray-700 flex flex-col justify-center">
            <h2 className="text-lg font-bold mb-2 dark:text-white">
              Como Jogar
            </h2>
            <p className="mb-2 text-sm md:text-base dark:text-white">
              Em um mundo onde a natureza e a tecnologia coexistem em harmonia,
              seu desafio é proteger o solo, combater pragas e restaurar áreas
              degradadas. Use suas habilidades para tomar decisões rápidas e
              alcançar o equilíbrio sustentável.
            </p>

            <h3 className="text-xl font-extrabold text-gray-900 mt-3 dark:text-white">
              Embarque nessa Aventura!
            </h3>
            <button className="mt-3 bg-green-700 text-white px-4 py-2 rounded-full font-bold hover:bg-green-800 transition">
              Jogar
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
