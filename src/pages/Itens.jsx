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
    <div className="min-h-screen bg-gray-100 dark:bg-[rgba(38,64,22,1)] p-4">
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl md:text-3xl font-bold dark:text-white">
            Gerenciar Itens
          </h1>
        </div>

        {/* Cabeçalho de lista */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-semibold text-lg mb-4 dark:text-white px-1">
          <span>Itens cadastrados</span>
          <span className="text-center hidden md:block">Ordenar</span>
          <span className="text-right hidden md:block">Filtrar</span>
        </div>

        {/* Lista de itens */}
        <div className="space-y-4">
          {itens.map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl grid grid-cols-1 md:grid-cols-3 items-center px-4 py-4 gap-4"
            >
              {/* Nome + Imagem */}
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.nome}
                  className="w-16 h-16 object-contain"
                />
                <span className="text-lg">{item.nome}</span>
              </div>

              {/* Preço */}
              <div className="text-center md:text-lg font-bold">
                R$ {item.preco.toFixed(2)}
              </div>

              {/* Tipo */}
              <div className="text-right">
                <span className="bg-green-600 text-white text-sm rounded-full px-3 py-1">
                  {item.tipo}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Valor total */}
        <div className="flex justify-end items-center mt-6 font-semibold text-lg dark:text-white">
          <div>Valor total: R$ {valorTotal.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
