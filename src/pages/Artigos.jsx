import foto1 from "../assets/img1.png"
import foto2 from "../assets/img2.png"
import foto3 from "../assets/img3.png"
import foto4 from "../assets/img4.png"


export function Artigos() {
    return (
        <>  

            <div className=" flex justify-center pt-5">
                <h1 className=" text-[35px] text-black text-3xl font-bold mb-4">Artigos Relevantes</h1>
            </div>
            <main className="flex bg-center px-12  flex justify-between items-start pt-12 gap-30 mb-25">
                <div>
                    <img src={foto1} alt="" className="h-60 rounded-3xl" />
                    <p className="pt-15 font-semibold text-[15px] text-center">Modelagem da biomassa de plantações florestais a partir da tecnologia LiDAR embarcada em drone</p>
                </div>
                <div>
                    <img src={foto2} alt=""  className="h-60 rounded-3xl" />
                    <p className="pt-15 font-semibold text-[15px] text-center">Tecnologia de fertilizantes agrícolas impacta na produtividade e durabilidade da plantação</p>
                </div>
                <div>
                    <img src={foto3} alt=""  className="h-60 rounded-3xl" />
                    <p className="pt-15 font-semibold text-[15px] text-center">Planejamento de um sistema de monitoramento de plantações para aplicação na agricultura familiar</p>
                </div>
                <div>
                    <img src={foto4} alt=""  className="h-60 rounded-3xl"/>
                    <p className="pt-15 font-semibold text-[15px] text-center">Modelagem da biomassa de plantações florestais a partir da tecnologia lidar embarcada em drone</p>
                </div>
            </main>
        </>
    )
}