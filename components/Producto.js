import Image from "next/image"
import { formatearDinero } from "@/helpers"
import useKiosco from "@/hooks/useKiosco"

const Producto = ({ producto }) => {
  const { handleSetProducto, handleChangeModal } = useKiosco()
  const { nombre, imagen, precio } = producto 

    return (
      <>
    <button 
      type="button"
      className="border p-3 sm:m-0 sm:flex md:block hover:shadow-lg hover:shadow-zinc-400 hover:bg-amber-400 hover:rounded-xl rounded-sm transition-all duration-300 group"
      onClick={()=> { 
        handleChangeModal()
        handleSetProducto(producto)
      }}
    >
        <Image
            src={`/assets/img/${imagen}.jpg`}
            alt={`Imagen Platillo ${nombre}`}
            width={300}
            height={400}
            className="mx-auto sm:mx-0 md:mx-auto"
        />

        <div className="p-5 h-52 md:h-52 lg:h-44 ">
            <h3 className="text-2xl font-bold text-zinc-700">{nombre}</h3>
            <p className="mt-5 font-black text-4xl text-amber-500 transition-all group-hover:text-white">
              {formatearDinero(precio)}
            </p>

        </div>
    </button>
    </>
  )
}

export default Producto