import Image from "next/image"
import { RiPencilLine, RiDeleteBin6Line } from "react-icons/ri";
import { formatearDinero } from "@/helpers"
import useKiosco from "@/hooks/useKiosco";

const ResumenProducto = ({ producto }) => {
    const { handleEditarCantidades, handleEliminarProducto } = useKiosco()
  return (
    <div className="shadow p-5 mb-3 flex gap-10 items-center bg-gray-100 rounded-xl">
        <div className="md:w-1/6">
            <Image
                width={300}
                height={400}
                alt={`Imagen producto ${producto.nombre}`}
                src={`/assets/img/${producto.imagen}.jpg`}    
                className="rounded-lg"
            />
        </div>    

        <div className="md:w-4/6">
            <p className="text-2xl font-bold">
                {producto.nombre}
            </p>
            <p className="text-xl font-bold mt-2">
                Cantidad: {producto.cantidad}
            </p>
            <p className="text-xl font-bold mt-2 text-amber-500">
                {formatearDinero(producto.precio)}
            </p>
            <p className="text-sm text-gray-700 mt-2">
                Subtotal: {formatearDinero(producto.precio * producto.cantidad)}
            </p>
        </div>

        <div className="grid gap-3">
            <button
                type="button"
                className="bg-sky-700 hover:bg-sky-800 flex gap-2 align-center px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full text-center justify-center"
                onClick={()=> handleEditarCantidades(producto.id)}
                ><RiPencilLine className="text-xl" /> Editar
            </button>

            <button
                type="button"
                className="bg-red-700 hover:bg-red-800 flex gap-3 align-center px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full text-center justify-center"
                onClick={()=> handleEliminarProducto(producto.id)}
            ><RiDeleteBin6Line className="text-xl" /> Eliminar
            </button>
        </div>
    </div>
  )
}

export default ResumenProducto