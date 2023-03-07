import { formatearDinero } from "@/helpers"
import Layout from "@/layout/Layout"
import useKiosco from "@/hooks/useKiosco"
/* Pagina del total del pedido para finalizar la compra */
export default function Total()  {
  const { pedido, nombre, setNombre, colocarOrden, total } = useKiosco()

  const comprobarPedido = () => {
    /* Si el nombre es menor a 3, no se envia el pedido */
    return pedido.length === 0 || nombre.length < 3;
  }

  return (
    <Layout pagina="Confirmar Pedido">
      <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
      <p className="text-2xl my-10">Confirma tu pedido a continuación</p>

      <form onSubmit={colocarOrden}>
        <div>
          <label
            htmlFor="nombre"
            className="block uppercase text-slate-800 font-bold text-xl"
          >
            Nombre
          </label>
                    {/* Entrada del nombre del usuario para el pedido */}
          <input
            id="nombre"
            type="text"
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
            placeholder="Escribe tu Nombre"
            value={nombre}
            onChange={e=> setNombre(e.target.value)}
          />
        </div>

        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar: {""} <span className="font-bold">{formatearDinero(total)}</span>
          </p>
        </div>

        <div className="mt-5">
          <input 
            type="submit"
            className={`${ comprobarPedido() ? "bg-amber-200" : "bg-amber-500 hover:bg-amber-600 cursor-pointer" }   w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
            value="Confirmar Pedido" 
            disabled={comprobarPedido()}
          />
        </div>
      </form>
    </Layout>
  )
}
