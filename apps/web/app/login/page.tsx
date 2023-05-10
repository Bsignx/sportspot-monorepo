import Template from './components/template'
import { getCurrentUser } from '../helpers/session'

const LoginPage = async () => {
  const user = await getCurrentUser()

  console.log({ user })

  return <Template />
}

export default LoginPage
