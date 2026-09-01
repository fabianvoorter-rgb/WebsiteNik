import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Comics from './pages/Comics'
import Home from './pages/Home'
import Logos from './pages/Logos'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/logos" element={<Logos />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
