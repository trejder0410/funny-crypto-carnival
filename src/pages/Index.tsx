import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import HowToBuy from "@/components/HowToBuy";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Toaster />
      <HeroSection />
      <Features />
      <HowToBuy />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;