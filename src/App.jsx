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
        <div className="hidden justify-center px-6 pt-24 pb-2 md:flex lg:hidden">
          <video
            src={`${import.meta.env.BASE_URL}snail.mov`}
            autoPlay
            loop
            muted
            playsInline
            className="h-24 w-auto"
            aria-label="Animated snail"
          />
        </div>
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
