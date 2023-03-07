import Image from "next/image"
import { formatearDinero } from "@/helpers"
import axios from "axios"
import { toast } from "react-toastify"
/* Ordenes para el panel administrador */
const Orden = ({ orden }) => {
    const { id, nombre, total, pedido } = orden
    
    const completarOrden = async () => {
        try {
            const data = await axios.post(`/api/ordenes/${id}`)
            toast.success(`Orden ${id} Lista`)
        } catch (error) {
            toast.error("Hubo un error")
        }
    }
  return (
    <div className="border p-10 space-y-5 bg-[#333] mt-20 rounded-2xl text-white">
        <h3 className="text-2xl font-bold">Orden: {id}</h3>
        <p className="text-xl font-bold ">Cliente: <span className="text-amber-400">{nombre}</span></p>

        <div>
            {pedido.map(platillo => (
                <div key={platillo.id} className="py-3 flex shadow shadow-gray-600 items-center bg-[#222] px-4 rounded-3xl mt-3">
                    <div className="w-44">
                        <Image
                            width={200}
                            height={300}
                            src={`/assets/img/${platillo.imagen}.jpg`}
                            alt={`Imagen Platillo ${platillo.nombre}`}
                            className="rounded-lg"
                        />
                    </div>

                    <div className="p-5 space-y-2">
                        <h4 className="text-2xl font-bold text-amber-400">{platillo.nombre}</h4>
                        <p className="text-lg font-bold">Cantidad: {platillo.cantidad}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="md:flex md:items-center md:justify-between my-10">
            <p className=" font-black text-3xl text-white">
                Total a pagar: <span className="text-amber-400">{formatearDinero(total)}</span>
            </p>

            <button 
                className="bg-green-500 hover:bg-green-400 text-white hover:text-black mt-5 md:mt-0 py-2 px-10 font-bold uppercase rounded-lg"
                type="button"
                onClick={completarOrden}
            >
                Completar orden
            </button>
        </div>
        
    </div>
  )
}

export default Orden