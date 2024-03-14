import 'normalize.css'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home/Home.jsx'

function App() {

  return (
    <main>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </main>
  )
}

export default App
