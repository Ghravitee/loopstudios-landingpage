import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Creations from "./components/Creations";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main>
        <div className="bg-hero-background-mobile lg:bg-hero-background-desktop bg-cover bg-no-repeat bg-[50%_100%]">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Creations />
      </main>
      <Footer />
    </>
  );
}

export default App;
