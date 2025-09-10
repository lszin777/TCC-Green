import foto1 from "../assets/img1.png";
import foto2 from "../assets/img2.png";
import foto3 from "../assets/img3.png";
import foto4 from "../assets/img4.png";

export function Artigos() {
  return (
    <div className="dark:bg-[rgba(38,64,22,1)] p-4 h-screen">
      {/* Título */}
      <div className="flex justify-center pt-2">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">
          Artigos Relevantes
        </h1>
      </div>

      {/* Cards */}
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-start pt-6">
        <div className="flex flex-col items-center">
          <img
            src={foto1}
            alt="Artigo 1"
            className="w-full h-40 md:h-60 rounded-2xl object-cover"
          />
          <p className="pt-2 font-semibold text-[14px] text-center dark:text-white">
            <a
              href="https://repositorio.unesp.br/entities/publication/1d59c558-db82-404e-a310-c992fae4448a"
              target="_blank"
              rel="noopener noreferrer"
            >
              Modelagem da biomassa de plantações florestais a partir da
              tecnologia LiDAR embarcada em drone
            </a>
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={foto2}
            alt="Artigo 2"
            className="w-full h-40 md:h-60 rounded-2xl object-cover"
          />
          <p className="pt-2 font-semibold text-[14px] text-center dark:text-white">
            <a
              href="http://repositorio.iqsc.usp.br/items/b9cb5a9e-c97c-4363-bb57-cabe00ee282f"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tecnologia de fertilizantes agrícolas impacta na produtividade
            </a>
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={foto3}
            alt="Artigo 3"
            className="w-full h-40 md:h-60 rounded-2xl object-cover"
          />
          <p className="pt-2 font-semibold text-[14px] text-center dark:text-white">
            <a
              href="https://owl.tupa.unesp.br/recodaf/index.php/recodaf/article/view/136"
              target="_blank"
              rel="noopener noreferrer"
            >
              Planejamento de um sistema de monitoramento de plantações
            </a>
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={foto4}
            alt="Artigo 4"
            className="w-full h-40 md:h-60 rounded-2xl object-cover"
          />
          <p className="pt-2 font-semibold text-[14px] text-center dark:text-white">
            <a
              href="https://revista.fatectq.edu.br/interfacetecnologica/pt_BR/article/view/1363"
              target="_blank"
              rel="noopener noreferrer"
            >
              O uso de veículos aéreos não tripulados para detecção de pragas
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
