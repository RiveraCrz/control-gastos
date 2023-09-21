
export const generarId = () => {
    const random = Math.random().toString(36);
    const fecha = Date.now().toString(36);

    return random+fecha;
}

export const formatDate = fecha => {
    const DateNew = new Date(fecha);
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }

    return DateNew.toLocaleDateString('es-ES', options)
}