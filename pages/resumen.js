import Layout from "@/layout/Layout"
import useKiosco from "@/hooks/useKiosco"
import ResumenProducto from "@/components/ResumenProducto"

/* Pagina de resumen para que el usuario pueda verificar, editar o eliminar el pedido */
export default function Resumen()  {
  const { pedido } = useKiosco()
    return (
      <Layout pagina="Resumen">
        <h1 className="text-4xl font-black">Resumen</h1>
        <p className="text-2xl my-10">Revisa tu pedido</p>
        {/* Si el pedido esta vacio, no muestra elementos, de lo contrario, muestra el pedido */}
        {pedido.length === 0 ? (
          <p className="text-center text-2xl">No hay elementos en tu pedido</p>
        ) : (
          pedido.map(producto => (
            <ResumenProducto
              key={producto.id}
              producto={producto}
            />
          ))
        )}
      </Layout>
    )
  }