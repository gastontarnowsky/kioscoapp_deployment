import Image from "next/image"
import useKiosco from "@/hooks/useKiosco"

const Categoria = ({categoria}) => {
    const { nombre, icono, id } = categoria
    const { categoriaActual, handleClickCategoria } = useKiosco()
  return (
    <button 
        type="button" 
        className={`${categoriaActual?.id === id ? "bg-amber-400" : ""} flex items-center gap-4 w-full border border-r-0 p-5 hover:bg-amber-400 hover:cursor-pointer transition-all`}
        onClick={()=> handleClickCategoria(id)}
    >
        <Image
            width={70}
            height={70}
            src={`/assets/img/icono_${icono}.svg`}
            alt="imagen icono"
        />

        <p className="text-2xl font-bold text-zinc-700">
            {nombre}
        </p>
    </button>
  )
}

export default Categoria