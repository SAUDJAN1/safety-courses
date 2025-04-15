import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Courses from "./Components/Courses.jsx";
import Features from "./Components/Features.jsx";
import Testimonials from "./Components/Testimonials.jsx";
import Footer from "./Components/Footer.jsx";

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
