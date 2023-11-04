/**
* Ejercicio en CHALLENGE_01.md
* @param {string} unMensaje
* @return {string}
*/

function desencriptarMensaje (unMensaje) {
  const map = unMensaje.toLowerCase().split(' ').reduce((map, unaPalabra) => {
    const cantidad = map.get(unaPalabra) || 0;
    map.set(unaPalabra, cantidad + 1);
    return map;
  }, new Map());

  return Array.from(map).flat().join('');
}

// function desencriptarMensaje (unMensaje) {
//   const unArreglo = unMensaje.toLowerCase().split(' ');
//   const map = new Map();

//   unArreglo.forEach(unaPalabra => {
//     if (map.has(unaPalabra)) {
//       const cantidad = map.get(unaPalabra);
//       map.set(unaPalabra, cantidad + 1);
//     } else {
//       map.set(unaPalabra, 1);
//     }
//   });

//   return Array.from(map).flat().join('');
// }

desencriptarMensaje('gato perro perro coche Gato peRRo sol'); // gato2perro3coche1sol1
