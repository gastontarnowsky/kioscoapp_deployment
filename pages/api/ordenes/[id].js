import { PrismaClient } from "@prisma/client"
export default async function handler(req, res) {

    const prisma = new PrismaClient()

    if (req.method === 'POST') {
        const { id } = req.query
/* Cambia el estado de la orden cuando el administrador la completa, para que desaparezca del panel */
        const ordenActualizada = await prisma.orden.update({
            where: {
                id: parseInt(id)
            },
            data: {
                estado: true
            },
        })
        res.status(200).json(ordenActualizada)
    }
}