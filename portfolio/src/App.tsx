import NavBar from "@/components/NavBar"
import Hero from "@/sections/Hero"
import About from "@/sections/About/About"
import Projects from "@/sections/Projects"
import Expertise from "@/sections/Expertise"
import Contact from "@/sections/Contact"

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
