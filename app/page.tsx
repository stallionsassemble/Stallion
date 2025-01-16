import HeroPage from "./pages/heropage";
import BuiltPage from "./pages/builtpage";
import AssemblePage from "./pages/assemble";
import CardSection from "./pages/cardsSection";
import HowItWorks from "./pages/howItworks";
import FooterPage from "./pages/footerPage";

export default function Home() {
  return (
    <div className="font-[Inter]">
        <HeroPage />
        <BuiltPage />
        <CardSection />
        <AssemblePage />
        <HowItWorks />
        <FooterPage />
    </div>
  );
}
