
import Layout from '@/layout/Layout'
import Producto from '@/components/Producto'
import useKiosco from '@/hooks/useKiosco'

/* Menu principal */
export default function Home() {
  const { categoriaActual } = useKiosco()

  return (
    <Layout pagina={`Menú ${categoriaActual?.nombre}`}>
      <h1 className='text-4xl font-black text-zinc-700 m-5'>{categoriaActual?.nombre}</h1>
      <p className='text-2xl my-10 m-5 text-zinc-700'>
        ¡Elige tu pedido!
      </p>
      {/* Muestra al usuario los productos del menu principal */}
      <div className=' md:pl-2 lg:pl-0 grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {categoriaActual?.productos?.map(producto=> (
          <Producto 
            key={producto.id}
            producto={producto}
          />
        ))}
      </div>
      
    </Layout>
  )
}
