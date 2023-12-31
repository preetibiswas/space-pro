import './App.css'
import NavBar from "./Component/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from './Component/Banner'
import Skills from './Component/Skills'
import Project from './Component/Project'
import Contact from './Component/Contact'
import Footer from './Component/Footer'

function App() {


  return (
    <div>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
   
  )
}

export default App
