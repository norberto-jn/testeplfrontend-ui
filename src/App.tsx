import { Navigate, Route, BrowserRouter as Router, Routes as Switch } from 'react-router-dom'
import NotFound from './pages/NotFound'
import ProtectedRoute from './utils/ProtectedRoute'
import Login from './pages/Login'
import Home from './pages/Home'
import SignUpPage from './pages/SignUpPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<Home />} />
        {/* <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        /> */}
        <Route path="*" element={<NotFound />} />
      </Switch>
    </Router>
  )
}

export default App