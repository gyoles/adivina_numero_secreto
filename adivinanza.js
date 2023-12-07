const generarNumeroAleatorio = () => {
  return Math.floor((Math.random() * 100) + 1);
};

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
  if (numeroAdivinado == numeroSecreto) {
    console.log(" ¡Felicitciones! ¡Adivinó el número secreto!");
  } else if (numeroAdivinado > numeroSecreto) {
    console.log(" El número secreto es menor. ¡Siga intentando!");
  } else {
    console.log(" El múmero secreto es mayor. ¡Siga intentado!");
  }
};

module.exports = { generarNumeroAleatorio, verificarAdivinanza };