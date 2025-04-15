import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Courses from "./components/Courses.jsx";
import Features from "./components/Features.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Courses />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
