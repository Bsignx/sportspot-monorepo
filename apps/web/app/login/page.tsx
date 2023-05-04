import { getCurrentUser } from '../helpers/session'
import Template from './components/template'

const LoginPage = async () => {
  const user = await getCurrentUser()

  console.log({ user })

  return <Template />
}

export default LoginPage
