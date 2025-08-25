import React from "react";
import game from "../assets/game.jpg";

export function Jogo() {
  return (
    <div className=" min-h-screen flex flex-col dark:bg-[rgba(38,64,22,1)] ">
      {/* Título */}
      <main className="flex flex-col items-center bg-white rounded-t-2xl -mt-5 p-8 dark:bg-[rgba(38,64,22,1)]">
        <h1 className="text-3xl font-bold text-black mb-6 dark:text-white">Jogo</h1>

        {/* Seção Como Jogar */}
        <section className="grid md:grid-cols-2 gap-10 max-w-5xl w-full gap-5">
          {/* Imagem do jogo */}
          <div className="relative">
            <img
              src={game}
              alt="Gameplay"
              className="rounded-lg shadow-lg object-cover  mt-25"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/80 rounded-full p-4 shadow-lg">
                ▶
              </button>
            </div>
          </div>

          {/* Texto */}
          <div className="text-gray-700 flex flex-col justify-center">
            <h2 className="text-lg font-bold mb-4 dark:text-white">Como Jogar</h2>
            <p className="mb-4 dark:text-white">
              Em um mundo onde a natureza e a tecnologia coexistem em harmonia,
              os jogadores assumem o papel de guardião de uma terra ancestral,
              conhecida como Vale Verdejante. Essa terra foi, por gerações, o
              coração pulsante da agricultura sustentável, onde culturas raras e
              plantas místicas florescem, garantindo o equilíbrio ecológico de
              toda a região.
            </p>
            <p className="mb-4 dark:text-white">
              Porém, após décadas de abandono e exploração irresponsável por
              corporações gananciosas, o vale foi degradado, deixando para trás
              solo infértil, florestas devastadas e rios contaminados.
            </p>
            <p className="mb-4 dark:text-white">
              Agora, com a ajuda de antigos conhecimentos agrícolas, tecnologia
              ecológica avançada e espécies de plantas mágicas, o jogador deve
              reviver o Vale Verdejante, restaurar ecossistemas, cultivar
              espécies únicas e proteger a terra contra ameaças naturais e
              humanas.
            </p>
            <h3 className="text-xl font-extrabold text-gray-900 mt-4 dark:text-white">
              Embarque nessa Aventura!
            </h3>
            <button className="mt-4 bg-green-700 text-white px-6 py-2 rounded-full font-bold hover:bg-green-800 transition">
              Jogar
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
