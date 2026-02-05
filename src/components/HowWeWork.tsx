import { Lightbulb, Palette, Code, TestTube, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    step: "01",
    title: "Idea",
    description: "We discuss your vision, goals, and requirements to understand your project deeply.",
  },
  {
    icon: Palette,
    step: "02",
    title: "Planning & Design",
    description: "Features & structure with a clear roadmap aligned to your goals.",
  },
  {
    icon: Code,
    step: "03",
    title: "Build",
    description: "Expert developers bring designs to life with clean, scalable, and efficient code.",
  },
  {
    icon: TestTube,
    step: "04",
    title: "Test",
    description: "Rigorous testing ensures your product is bug-free and performs flawlessly.",
  },
  {
    icon: Rocket,
    step: "05",
    title: "Launch",
    description: "We deploy your product and provide ongoing support for continued success.",
  },
  {
    icon: Headphones,
    step: "06",
    title: "Support",
    description: "Maintenance, upgrades, and long-term assistance.",
  },
];

const HowWeWork = () => {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-3">
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How We Work
          </h2>
          <p className="text-primary-foreground/70">
            A proven process that delivers results, every time with simple and transparent.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gold/30">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 border-t-2 border-r-2 border-gold/30" />
                </div>
              )}

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 mx-auto rounded-full bg-gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <step.icon size={28} className="text-primary" />
              </div>

              {/* Step Number */}
              <p className="text-gold text-sm font-semibold mb-2">{step.step}</p>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>

              {/* Description */}
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
