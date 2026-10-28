import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Experience from './components/Experience'
import ProfessionalWork from './components/ProfessionalWork'
import PersonalProject from './components/PersonalProject'
import Skills from './components/Skills'
import EngineeringApproach from './components/EngineeringApproach'
import Contact from './components/Contact'
import Footer from './components/Footer'
export default function App() {
  return (
    <>
      <Navbar />
      <div className="lg:pl-72">
        <main><Hero /><About /><Stats /><Experience /><ProfessionalWork /><PersonalProject /><Skills /><EngineeringApproach /><Contact /></main>
        <Footer />
      </div>
    </>
  )
}
