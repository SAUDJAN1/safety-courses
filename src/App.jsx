import Navbar from "./Components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

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
