import Hero from "@/components/Hero";
import RegistrationSection from "@/components/RegistrationSection";
import HowToEnter from "@/components/HowToEnter";
import BackToSchool from "@/components/BackToSchool";
import Terms from "@/components/Terms";
import Container from "@/components/Container";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Container>
        <Hero />
        <RegistrationSection />
        <BackToSchool />
        <HowToEnter />
        <Terms />
      </Container>
    </main>
  );
}
