import React from "react";
import joao from "../assets/joao.jpg";
import logo from "../assets/logo.svg";
import { Switch } from "../components/Switch";

export function Detalhes() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 dark:bg-[rgba(38,64,22,1)]">
      {/* Sidebar para desktop */}
      <aside className="hidden md:flex md:flex-col w-16 bg-green-700 items-center py-4">
        <a href="/home">
          <img src={logo} alt="Logo" className="h-10" />
        </a>
      </aside>

      <div className="flex-1">
        {/* Header */}
        <header className="flex flex-col w-full bg-white shadow dark:bg-[rgba(38,64,22,1)]">
          <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
            <div>
              <h1 className="text-lg md:text-2xl font-bold dark:text-white">
                Bem-Vindo, João
              </h1>
              <p className="text-xs md:text-sm text-gray-500">
                Terça, 07 JUNHO 2025
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Switch />
              {/* Botão menu mobile */}
              <button className="md:hidden p-2 rounded-md bg-gray-100">☰</button>
              {/* Sino apenas em telas maiores */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-600 hidden sm:block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3c0 .217-.035.427-.105.626L4.5 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <img
                src={joao}
                alt="user"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full"
              />
            </div>
          </div>
        </header>

        {/* Conteúdo */}
        <main className="p-4 md:p-6 dark:bg-[rgba(38,64,22,1)]">
          <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md max-w-3xl mx-auto">
            {/* Perfil */}
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <img
                src={joao}
                alt="profile"
                className="w-14 h-14 md:w-20 md:h-20 rounded-full"
              />
              <div>
                <h2 className="text-base md:text-xl font-semibold">
                  João Pedro Sousa Aguiar
                </h2>
                <p className="text-xs md:text-sm text-gray-500">
                  joaopedrosousaaguiar@gmail.com
                </p>
              </div>
              <button className="ml-auto bg-green-600 text-white px-3 py-1 text-sm rounded-lg hover:bg-green-700">
                Editar
              </button>
            </div>

            {/* Formulário */}
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Nome Completo:</label>
                <input
                  type="text"
                  placeholder="Digite seu nome"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Apelido:</label>
                <input
                  type="text"
                  placeholder="Digite seu apelido"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Gênero:</label>
                <input
                  type="text"
                  placeholder="Digite seu gênero"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">País:</label>
                <input
                  type="text"
                  placeholder="Digite seu país"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Linguagem:</label>
                <input
                  type="text"
                  placeholder="Digite sua linguagem"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Fuso Horário:</label>
                <input
                  type="text"
                  placeholder="Digite seu fuso horário"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
                />
              </div>
            </form>

            {/* Email */}
            <div className="mt-4">
              <h3 className="font-medium">Meu endereço de email</h3>
              <div className="flex items-center gap-2 mt-2">
                <input type="checkbox" />
                <span className="text-gray-600 text-sm">
                  joaopedrosousaaguiar@gmail.com
                </span>
              </div>

              <button className="mt-3 px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                + add email
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
