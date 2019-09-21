import Car from './closures/car'
import UserGithub from './closures/userGithub'
import NumberSingleton from './closures/numberSingleton'
import testeSingleton from './testSingleton'


const app = async () => {
  const car = Car('')
  car.setBoard('12d4q6')
  car.setModel('Tesla')
  console.log(car.getBoard(), car.getModel())

  try {
    const user = await UserGithub('vitorkaio')
    console.log(user.getId(), user.getLogin(), user.getLocation())
    // const user2 = await UserGithub('lis')
    // console.log(user2.getId(), user2.getLogin(), user2.getLocation())
  } catch (err) {
    console.log(err)
  }

  console.log('\napp function')
  NumberSingleton.increment()
  console.log(NumberSingleton.getContador())
  testeSingleton()
}

app()
