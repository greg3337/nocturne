import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Ambiance from "@/components/Ambiance";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Menu />
      <Ambiance />
      <Reviews />
      <Contact />
    </main>
  );
}
