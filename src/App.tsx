import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingView from './views/LandingView'

function App() {
 
  return (
    <Router>
      <Routes>
        {/* Rutas con PublicLayout */}
        <Route path="/" element={<LandingView></LandingView>}>
          <Route index element={<LandingView></LandingView>} />
          {/* Más páginas públicas aquí */}
        </Route>

        {/* Rutas con UserLayout */}
        <Route path="/main-app" element={<div>Layout de Usuario</div>}>
          {/* Rutas hijas para main-app */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App