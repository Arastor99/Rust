export function generarAgrupaciones(array) {
    const resultado = [];
    const n = array.length;
  
    for (let r = 2; r <= 9; r++) {
      if (n < r) {
        break;
      }
  
      const combinaciones = [];
      combinarElementos(array, r, 0, [], combinaciones);
      resultado.push(...combinaciones);
    }
  
    return resultado;
  }
  
  function combinarElementos(array, r, start, combinacionActual, combinaciones) {
    if (combinacionActual.length === r) {
      combinaciones.push(combinacionActual.slice());
      return;
    }
  
    for (let i = start; i < array.length; i++) {
      combinacionActual.push(array[i]);
      combinarElementos(array, r, i + 1, combinacionActual, combinaciones);
      combinacionActual.pop();
    }
  }