import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export function ErrorPage() {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(5); 

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => prev - 1);
    }, 1000);

    const redirect = setTimeout(() => {
      navigate("/home");
    }, 5000); 

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      <div
        className="text-center p-6 shadow-lg rounded-2xl max-w-md w-full"
        style={{ backgroundColor: "var(--color-green-600)" }}
      >
        <h1 className="text-4xl font-bold mb-4 text-white">Erro 404!</h1>
        <p className="text-lg mb-2 text-white">Página não encontrada!</p>
        <p className="text-white">
          Redirecionando para a{" "}
          <span className="font-semibold">Home</span> em{" "}
          <span className="font-bold text-red-500 animate-pulse">{counter}</span>...
        </p>
      </div>
    </div>
  );
}
