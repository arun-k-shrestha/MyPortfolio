import About from "./sections/about/About"
import Contact from "./sections/contact/Contact"
import Footer from "./sections/footer/Footer"
import Header from "./sections/header/Header"
import Navbar from "./sections/navbar/Navbar"
import Portfolio from "./sections/portfolio/Portfolio"

function App(){
    return(
    <main>
    <Navbar/>
    <Header/>
    <About/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </main>
    )
}

export default App