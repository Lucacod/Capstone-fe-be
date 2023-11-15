import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navigation from './components/navbar/Navigation'
import Home from './components/pages/Home'
import TestRoom from './components/rooms/TestRoom'
import RecStudio from './components/studio/RecStudio'
import MusicCourses from './components/course/MusicCourses'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Login from './components/pages/Login'
import Footer from './components/footer/Footer'
import Reservation from './components/reservation/Reservation'

const App = () => {


  return (

    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/rooms" element={<TestRoom />} />
        <Route path="/studio" element={<RecStudio />} />
        <Route path="/course" element={<MusicCourses />} />
        <Route path="/home" element={<Home />} />
        <Route path='reservation' element={<Reservation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App