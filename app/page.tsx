import Hero from "@/components/Hero";
import RegistrationSection from "@/components/RegistrationSection";
import HowToEnter from "@/components/HowToEnter";
import Adventure from "@/components/Adventure";
import Winner from "@/components/Winner";
import Terms from "@/components/Terms";
import Container from "@/components/Container"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Container>
      <Hero />
      <RegistrationSection />
      <HowToEnter />
      <Adventure />
      <Winner />
      <Terms />
      </Container>
    </main>
  );
}
