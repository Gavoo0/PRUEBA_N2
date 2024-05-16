document.getElementById('formularioRUT').addEventListener('submit', function(event) {
    if (!validarRUT()) {
        event.preventDefault();
    }
});

function validarRUT() {
    const rutInput = document.getElementById('RutCliente').value;
    const mensaje = document.getElementById('mensaje');

    // Limpiar puntos y guion
    const rutClean = rutInput.replace(/\./g, '').replace('-', '');
    if (rutClean.length < 8) {
        mensaje.textContent = 'RUT inválido';
        return false;
    }

    const cuerpo = rutClean.slice(0, -1);
    const dv = rutClean.slice(-1).toUpperCase();

    let suma = 0;
    let multiplo = 2;

    for (let i = 1; i <= cuerpo.length; i++) {
        const index = multiplo * rutClean.charAt(cuerpo.length - i);
        suma = suma + index;
        multiplo = multiplo < 7 ? multiplo + 1 : 2;
    }

    const dvEsperado = 11 - (suma % 11);
    const dvFinal = dvEsperado == 11 ? '0' : dvEsperado == 10 ? 'K' : dvEsperado.toString();

    if (dvFinal !== dv) {
        mensaje.textContent = 'RUT inválido';
        return false;
    }

    mensaje.textContent = '';
    return true;
}