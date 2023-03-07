import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();
export default async function handler(req, res) {
  
{/* Obtener categorias */}
  const categorias = await prisma.categoria.findMany({
    include: {
      productos: true,
    },
  });
  res.status(200).json(categorias)
}
