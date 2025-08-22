import { useEffect } from "react";
import { useNavigate } from "react-router";

export function ErrorPage() {
  const navigate = useNavigate(); 

  useEffect(() => {
  
    setTimeout(() => {
      navigate("/"); 
    }, 3000);
  }, []); 

  return (
    <div>
      <h1>Erro 404. Página não encontrada!</h1>
      <p>Redirecionando para a home...</p>
    </div>
  );
}

  