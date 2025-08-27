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
    <div className="min-h-screen bg-gray-100 dark:bg-[rgba(38,64,22,1)]">
      <div className="flex justify-center pt-5">
        <h1 className="text-[35px] text-black text-3xl font-bold mb-4 dark:text-white">
          Gerenciar Itens
        </h1>
      </div>

      
      <main className="container mx-auto py-8">
        
        <div className="grid grid-cols-3 font-semibold text-lg mb-6 px-6 dark:text-white">
          <span>Itens cadastrados</span>
          <span className="text-center">Ordenar</span>
          <span className="text-right">Filtrar</span>
        </div>

        
        <div className="space-y-4 ">
          {itens.map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl grid grid-cols-3 items-center px-6 py-4"
            >
              
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.nome}
                  className="w-16 h-16 object-contain"
                />
                <span className="text-lg">{item.nome}</span>
              </div>

              
              <div className="text-center font-bold text-lg">
                {item.preco.toFixed(2)}
              </div>

              
              <div className="text-right">
                <span className="bg-green-600 text-white text-sm rounded-full px-4 py-1">
                  {item.tipo}
                </span>
              </div>
            </div>
          ))}
        </div>

       
        <div className="grid grid-cols-3 items-center mt-8 px-6 font-semibold text-lg dark:text-white">
          <div></div>
          <div className="text-center ">
            Valor total: {valorTotal.toFixed(2)}
          </div>
          <div></div>
        </div>
      </main>
    </div>
  );
}
