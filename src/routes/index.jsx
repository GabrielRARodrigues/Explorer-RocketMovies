import { BrowserRouter } from 'react-router-dom'
import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'

export function Routes() {
  const login = true
  if (login) {
    return (
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    )
  } else {
    return (
      <BrowserRouter>
        <AuthRoutes />
      </BrowserRouter>
    )
  }
}
