import 'normalize.css'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'

function App() {

  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </main>
  )
}

export default App
