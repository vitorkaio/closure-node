import axios from 'axios'

const url = 'https://api.github.com/users/';

export default async function UserGithub(user) {
  let id = ''
  let login = ''
  let location = ''

  try {
    const res = await axios.get(url + user)
    const { data } = res
    id = data.id
    login = data.login
    location = data.location
  } 
  catch (_) {
    throw('Not Found!')
  }

  const getId = () => id
  const getLogin = () => login
  const getLocation = () => location

  return {
    getId: getId,
    getLogin: getLogin,
    getLocation: getLocation
  }

}
