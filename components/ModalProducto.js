import { useState, useEffect } from "react";
import Image from "next/image"
import useKiosco from "@/hooks/useKiosco"
import { formatearDinero } from "@/helpers";
import { RiCloseFill, RiIndeterminateCircleLine, RiAddCircleLine } from "react-icons/ri";

const ModalProducto = () => {
  
  const { producto, handleChangeModal, handleAgregarPedido, pedido } = useKiosco();
  const [cantidad, setCantidad] = useState(1);
  const [edicion, setEdicion] = useState(false);

    useEffect(()=> {
        if (pedido.some((pedidoState)=> pedidoState.id === producto.id)) {
            const productoEdicion = pedido.find(
                (pedidoState)=> pedidoState.id === producto.id
            );
            setEdicion(true);
            setCantidad(productoEdicion.cantidad);
        }
    },[producto, pedido]);


  function handleClick(e) {
    e.stopPropagation();
}

    return (
    <div className="md:flex gap-10" onClick={handleClick}>
        <div className="md:w-full">
            <Image
                width={400}
                height={550}
                alt={`imagen producto ${producto.nombre}`}
                src={`/assets/img/${producto.imagen}.jpg`}
                className="rounded-md"
            />
        </div>

        <div className="md:w-full text-white">
            <div className="flex justify-end text-2xl m-5 md:m-0">
                <button
                    onClick={handleChangeModal}
                >
                    <RiCloseFill />
                </button>
            </div>

            <h1 className="text-3xl font-bold mt-5">{producto.nombre}</h1>
            <p className="mt-5 font-black text-5xl text-amber-500">
                {formatearDinero(producto.precio)}
            </p>
            
            <div className="text-3xl flex gap-4 mt-5">
                <button
                    type="button"
                    onClick={()=>{
                        if(cantidad !== 1) setCantidad(cantidad - 1)
                    }}
                >
                    <RiIndeterminateCircleLine />
                </button>

                <p className="text-3xl">{cantidad}</p>

                <button
                    type="button"
                    onClick={()=>{
                        if(cantidad < 10) setCantidad(cantidad + 1)
                    }}
                >
                    <RiAddCircleLine/>
                </button>
            </div>
                {/* el ...producto sirve para agregar a Cantidad dentro de ese objeto */}
            <button
                type="button" 
                onClick={()=> handleAgregarPedido({...producto, cantidad})}
                className="bg-amber-500 hover:bg-amber-700 px-5 py-2 mt-5 text-white font-bold uppercase rounded">
                    {edicion ? "Guardar Cambios" : "Añadir al Pedido"}
                </button>
        </div>
    </div>
  )
}

export default ModalProducto