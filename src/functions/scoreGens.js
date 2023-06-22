const puntuaciones = {
    Y: 2,
    G: 2,
    H: 1,
    W: 0,
    X: 0,
  };
  
 export function ordenarPorPuntuacion(array) {
    const resultado = array.map((cadena) => ({
      value: cadena,
      puntuacion: calcularPuntuacion(cadena),
    }));
  
    resultado.sort((a, b) => b.puntuacion - a.puntuacion);
  
    return resultado;
  }
  
  function calcularPuntuacion(cadena) {
    let puntuacion = 0;
    for (let i = 0; i < cadena.length; i++) {
      const letra = cadena[i];
      if (letra in puntuaciones) {
        puntuacion += puntuaciones[letra];
      }
    }
    return puntuacion;
  }
