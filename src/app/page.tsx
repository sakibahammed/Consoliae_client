import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Stack from "@/components/Stack";
import Fit from "@/components/Fit";
import Ask from "@/components/Ask";
import Estimator from "@/components/Estimator";
import Compare from "@/components/Compare";
import Engagements from "@/components/Engagements";
import Clients from "@/components/Clients";
import Reach from "@/components/Reach";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Capabilities />
        <Work />
        <Process />
        <Stack />
        <Fit />
        <Ask />
        <Estimator />
        <Compare />
        <Engagements />
        <Clients />
        <Reach />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
