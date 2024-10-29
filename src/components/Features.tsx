import { Laugh, PartyPopper, Rocket } from "lucide-react";

const features = [
  {
    icon: <Laugh className="w-12 h-12" />,
    title: "Community Driven",
    description: "Join thousands of happy hodlers in our growing community"
  },
  {
    icon: <PartyPopper className="w-12 h-12" />,
    title: "Regular Events",
    description: "Weekly meme contests with sweet rewards"
  },
  {
    icon: <Rocket className="w-12 h-12" />,
    title: "To The Moon!",
    description: "Because that's where all good memecoins go 🚀"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-accent mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;