import { Rocket, CandyCane } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-accent to-secondary py-20">
      <div className="container px-4">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 bg-yellow-300 rounded-full animate-spin opacity-50"></div>
            <div className="relative bg-primary rounded-full p-6 animate-float">
              <CandyCane className="w-full h-full text-black" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
            MemeC<span className="text-primary">❍</span>in
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            The most delicious crypto you'll ever HODL! 🍬
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-black hover:bg-primary/90">
              Buy Now <Rocket className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;