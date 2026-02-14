import NavBar from "@/components/NavBar"
import Hero from "@/sections/Hero"
import About from "@/sections/About/About"
import Projects from "@/sections/Projects/Projects"
import Contact from "@/sections/Contact"
import Footer from "./sections/Footer"

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        {/* <Expertise /> */}
        <Projects />
        <Contact email={"sahayshashank28@gmail.com"} />
      </main>
      <Footer email={"sahayshashank28@gmail.com"} username={{ github: "sahay-shashank", linkedin: "sahay-shashank" }} />
    </>
  )
}

export default App
