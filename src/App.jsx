import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/home/Home'
import About from './Pages/about/About'
import Contact from './Pages/contact/Contact'
import Gallery from './Pages/gallery/Gallery'
import Notfound from './Pages/notfound/Notfound'
import Plans from './Pages/plans/Plans'
import Trainers from './Pages/trainers/Trainers'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Gallery />
      <Plans />
      <Trainers />
      <Notfound />
    </BrowserRouter>
  )
}

export default App