import NavBar from "@/components/NavBar"
import Hero from "@/sections/Hero"
import About from "@/sections/About/About"
import Projects from "@/sections/Projects/Projects"
import Contact from "@/sections/Contact"
import Footer from "@/sections/Footer"
import Philosophy from "@/sections/Philosophy"
// import Watermark from "@/components/Watermark"

function App() {
  return (
    <>
      <NavBar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Philosophy />
        <Projects />
        <Contact email={"sahayshashank28@gmail.com"} />
      </main>
      <Footer email={"sahayshashank28@gmail.com"} username={{ github: "sahay-shashank", linkedin: "sahay-shashank" }} />
    </>
  )
}

export default App
