import Image from "next/image"
import useKiosco from "@/hooks/useKiosco"
import Categoria from "./Categoria"

const Sidebar = () => {
    const { categorias } = useKiosco()
  return (
    <div className="md:h-screen md:overflow-y-scroll md:fixed" id="subbarra">
      {/* Barra por si se agregan mas categorias al sidebar */}
         <style>
        {`
          #subbarra::-webkit-scrollbar {
            width: 0.3em;
            background-color: #F5F5F5;
          }
          
          #subbarra::-webkit-scrollbar-thumb {
            background-color: #aaa;
          }
        `}
        </style>
        <Image 
            width={120} 
            height={50} 
            src="/assets/img/logo.svg" 
            alt="imagen logotipo" 
            className="m-auto mt-5"
        />

        <nav className="mt-6">
            {categorias.map(categoria => (
                <Categoria
                    key={categoria.id}
                    categoria={categoria}
                />
            ))}
        </nav>
    </div>
  )
}

export default Sidebar