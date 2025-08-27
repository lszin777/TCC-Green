import foto1 from "../assets/img1.png"
import foto2 from "../assets/img2.png"
import foto3 from "../assets/img3.png"
import foto4 from "../assets/img4.png"


export function Artigos() {
    return (
        <> 
            <div className="dark:bg-[rgba(38,64,22,1)]">
                <div className=" flex justify-center pt-5">
                    <h1 className=" text-[35px] text-black text-3xl font-bold mb-4 dark:text-white">Artigos Relevantes</h1>
                </div>
                <main className="flex bg-center px-12  flex justify-between items-start pt-12 gap-30  pb-25">
                    <div>
                        <img src={foto1} alt="" className="h-60 rounded-3xl" />
                        <p className="pt-15 font-semibold text-[15px] text-center dark:text-white">
                            <a href="https://repositorio.unesp.br/entities/publication/1d59c558-db82-404e-a310-c992fae4448a" target="_blank">
                            Modelagem da biomassa de plantações florestais a partir da tecnologia LiDAR embarcada em drone
                            </a> 
                        </p>
                    </div>
                    <div>
                        <img src={foto2} alt=""  className="h-60 rounded-3xl" />
                        <p className="pt-15 font-semibold text-[15px] text-center dark:text-white">
                            <a href="http://repositorio.iqsc.usp.br/items/b9cb5a9e-c97c-4363-bb57-cabe00ee282f" target="_blank">
                            Tecnologia de fertilizantes agrícolas impacta na produtividade e durabilidade da plantação
                            </a>
                        </p>
                    </div>
                    <div>
                        <img src={foto3} alt=""  className="h-60 rounded-3xl" />
                        <p className="pt-15 font-semibold text-[15px] text-center dark:text-white">
                            <a href="https://owl.tupa.unesp.br/recodaf/index.php/recodaf/article/view/136" target="_blank">
                            Planejamento de um sistema de monitoramento de plantações para aplicação na agricultura familiar
                            </a>
                        </p>
                    </div>
                    <div>
                        <img src={foto4} alt=""  className="h-60 rounded-3xl"/>
                        <p className="pt-15 font-semibold text-[15px] text-center dark:text-white">
                            <a href="https://revista.fatectq.edu.br/interfacetecnologica/pt_BR/article/view/1363" target="_blank">
                            O uso de veículos aéreos não tripulados para detecção de pragas e doenças na cultura da soja
                            </a>
                        </p>
                    </div>
                </main>
            </div>
        </>
    )
}