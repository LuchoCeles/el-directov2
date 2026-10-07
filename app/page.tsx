import Header from "@/components/inicio/Header";
import HeroPrincipal from "@/components/inicio/HeroPrincipal";
import FranjaValor from "@/components/inicio/FranjaValor";
import Rutas from "@/components/inicio/Rutas";
import ResumenServicios from "@/components/inicio/ResumenServicios";
import ResumenEmpresa from "@/components/inicio/ResumenEmpresa";
import AccesosInicio from "@/components/inicio/AccesosInicio";
import CierreInicio from "@/components/inicio/CierreInicio";
import Footer from "@/components/inicio/Footer";

export default function PaginaInicio() {
  return (
    <>
      <Header />
      <main>
        <HeroPrincipal />
        <FranjaValor />
        <Rutas />
        <ResumenServicios />
        <ResumenEmpresa />
        <AccesosInicio />
        <CierreInicio />
      </main>
      <Footer />
    </>
  );
}
