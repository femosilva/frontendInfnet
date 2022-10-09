import UnauthenticatedApp from './UnauthenticatedApp'
import { BrowserRouter } from 'react-router-dom'

const Routes = () => {
  return (
    <BrowserRouter>
        <UnauthenticatedApp />
    </BrowserRouter>
  )
}

export default Routes