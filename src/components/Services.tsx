import { Link } from "react-router-dom";
import {
  Globe,
  Gamepad2,
  Box,
  Code,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "App & Web Development",
    description:
      "Custom web and mobile applications built with modern technologies for seamless user experiences.",
  },
  {
    icon: Code,
    title: "Software & Games",
    description:
      "Enterprise-grade software and game development solutions built for scalability and performance.",
  },
  {
    icon: Gamepad2,
    title: "3D Simulation",
    description:
      "Realistic 3D simulations with interactive environments and real-time visualization for immersive experiences.",
  },
  {
    icon: Box,
    title: "3D Modelling & Stimulations",
    description:
      "Stunning 3D assets and visualizations for games, product showcases, and architectural renders.",
  },
];

const Services = () => {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground">
            From concept to launch, we deliver end-to-end solutions tailored to
            your unique needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 card-hover shadow-card group"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center text-gold text-sm font-medium group/link"
              >
                Learn More
                <ArrowRight
                  size={16}
                  className="ml-1 group-hover/link:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services" className="btn-outline-gold">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
