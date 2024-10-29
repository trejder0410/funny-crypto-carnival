import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Create Wallet",
    description: "Download MetaMask or your favorite wallet"
  },
  {
    number: "02",
    title: "Get Some ETH",
    description: "You'll need ETH to swap for MemeCoin"
  },
  {
    number: "03",
    title: "Connect & Swap",
    description: "Connect your wallet and swap ETH for MemeCoin"
  }
];

const HowToBuy = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary via-accent to-primary">
      <div className="container px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">How to Buy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl text-white"
            >
              <div className="text-6xl font-bold mb-4 text-primary">{step.number}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-white/80">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" className="bg-primary text-black hover:bg-primary/90">
            Buy MemeCoin Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;