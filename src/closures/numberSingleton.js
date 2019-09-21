
const  NumberSingleton = () => {
  let contador = 0

  const increment = () => contador++
  const decrement = () => contador--
  const getContador = () => contador

  return {
    increment: increment,
    decrement: decrement,
    getContador: getContador
  }
}

export default NumberSingleton()
