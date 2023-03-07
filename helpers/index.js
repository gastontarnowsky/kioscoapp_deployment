/* Cambiar el formato de un numero al de dinero */
export const formatearDinero = cantidad => {
    return cantidad.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    })
}
