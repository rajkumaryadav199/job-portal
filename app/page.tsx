import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PopularJobs from "@/components/PopularJobs";
import HowItWorks from "@/components/HowItWorks";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <PopularJobs />
      <HowItWorks />
    </main>
  );
}
