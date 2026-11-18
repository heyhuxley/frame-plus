import Hero from "@/components/home/Hero";
import Program from "@/components/home/Program";
import Selection from "@/components/home/Selection";
import Trailers from "@/components/home/Trailers";
import HowItWorks from "@/components/home/HowItWorks";

export default function Home() {
  return (
    <div className="">
      <main className="">
          <Hero />
          <Program />
          <Selection />
          <Trailers />
          <HowItWorks />
      </main>
    </div>
  );
}
