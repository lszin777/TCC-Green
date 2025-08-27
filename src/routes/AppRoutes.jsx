import { Routes, Route, Navigate } from "react-router" 
import { Home } from "../pages/Home"
import { Artigos } from "../pages/Artigos"
import { Detalhes } from "../pages/Detalhes"
import { SomosNos } from "../pages/SomosNos"
import { Jogo } from "../pages/Jogo"
import { Itens }from "../pages/Itens"

import { Layout } from "../components/Layout"
import { ErrorPage } from "../pages/ErrorPage"
export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />

            <Route path="/home" element={<Home />} />
            <Route path="/detalhes" element={<Detalhes />} />
            <Route path="/somosnos" element={<SomosNos />} />
            
            <Route path="/" element={<Layout />}> 
                <Route path="/itens" element={<Itens />} /> 
                <Route path="/jogo" element={<Jogo />} /> 
                <Route path="/artigos" element={<Artigos />} /> 
            </Route>
        
            <Route path="*" element={<ErrorPage />} />

        </Routes>
    )
}