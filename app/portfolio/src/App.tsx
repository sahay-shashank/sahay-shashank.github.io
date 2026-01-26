import Footer from "./components/Footer";
import NavBarComponent from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Expertise from "./pages/Expertise";
import Projects from "./pages/Projects";


export default function App() {
    return (
        <>
            <NavBarComponent />
            <main>
                <About />
                <Expertise />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    )
}