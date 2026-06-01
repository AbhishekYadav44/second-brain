import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export function LandingPage() {
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-b from-[#c1bfbf] via-[#9b9fa4] to-[#c1bfbf]">
      <div className="max-w-4xl mx-auto h-full flex flex-col">
        <Navbar />

        <div className="flex-1 flex flex-col justify-center">
          <Hero />
          <Footer />
        </div>
      </div>
    </div>
  );
}