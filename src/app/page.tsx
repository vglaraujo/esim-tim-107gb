import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { Compatibility } from "@/components/Compatibility";
import { Security } from "@/components/Security";
import { Guarantee } from "@/components/Guarantee";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Benefits />
      <HowItWorks />
      <Compatibility />
      <Security />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
