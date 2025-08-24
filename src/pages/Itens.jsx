import React from "react";

import arduino from "../assets/arduino.png";
import sensorTemp from "../assets/sensorTemp.png";
import sensorHumi from "../assets/sensorHumi.png";
import display from "../assets/display.png";

const itens = [
  { nome: "Arduino uno", preco: 79.9, tipo: "Placa", img: arduino },
  { nome: "Sensor de umidade", preco: 59.9, tipo: "Sensor", img: sensorHumi },
  { nome: "Sensor de temperatura", preco: 29.9, tipo: "Sensor", img: sensorTemp },
  { nome: "Display lcd", preco: 69.9, tipo: "Tela", img: display },
];

export function Itens() {
  const valorTotal = itens.reduce((acc, item) => acc + item.preco, 0);

  return (
    <div className="min-h-screen bg-gray-100">
        <div className=" flex justify-center pt-5">
                <h1 className=" text-[35px] text-black text-3xl font-bold mb-4">Gerenciar Itens</h1>
            </div>
      {/* Conteúdo */}
      
      <main className="container mx-auto py-8">
        {/* Cabeçalho da tabela */}
        <div className="grid grid-cols-3 font-semibold text-lg mb-6 px-6">
          <span>Itens cadastrados</span>
          <span className="text-center">Ordenar</span>
          <span className="text-right">Filtrar</span>
        </div>

        {/* Lista de itens */}
        <div className="space-y-4">
          {itens.map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl flex items-center justify-between px-6 py-4"
            >
              {/* Coluna item */}
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.nome}
                  className="w-16 h-16 object-contain"
                />
                <span className="text-lg">{item.nome}</span>
              </div>

              {/* Coluna preço */}
              <div className="font-bold text-lg">{item.preco.toFixed(2)}</div>

              {/* Coluna tipo */}
              <span className="bg-green-600 text-white text-sm rounded-full px-4 py-1">
                {item.tipo}
              </span>
            </div>
          ))}
        </div>

        {/* Valor total */}
        <div className="flex justify-end items-center mt-8 px-6 font-semibold text-lg">
          <span className="mr-4">Valor total</span>
          <span>{valorTotal.toFixed(2)}</span>
        </div>
      </main>
    </div>
  );
}
