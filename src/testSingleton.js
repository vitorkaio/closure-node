import NumberSingleton from './closures/numberSingleton'

const testSingleton = () => {
  NumberSingleton.increment()
  NumberSingleton.increment()
  console.log('\ntestSingleton function')
  console.log(NumberSingleton.getContador())
}

export default testSingleton
