import useSWR from "swr"
import axios from "axios"
import AdminLayout from "@/layout/AdminLayout"
import Orden from "../components/Orden"

/* Pagina del administrador */
export default function Admin() {

    const fetcher = () => axios("/api/ordenes").then(datos => datos.data)
    const { data, error, isLoading } = useSWR("/api/ordenes", fetcher, {refreshInterval: 100})

  return (
    <AdminLayout pagina={"Admin"}>
        <h1 className="text-4xl font-black text-amber-400">Panel de Administracion</h1>
        <p className="text-2xl my-10 text-white">Administra las ordenes</p>

        {/* Separa las ordenes para que el administrador organice los pedidos y los complete */}
        {data && data.length ? data.map(orden => 
            <Orden
                key={orden.id}
                orden={orden}
            />
        ) : <p className="text-amber-400 font-bold text-center text-4xl uppercase">No hay ordenes pendientes</p>}
    </AdminLayout>
  )
}
