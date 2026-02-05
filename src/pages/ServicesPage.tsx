import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  Globe,
  Gamepad2,
  Box,
  Code,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "App & Web Development",
    description:
      "Custom web and mobile applications built with modern technologies for seamless user experiences across all devices and platforms.",
    features: [
      "Responsive web applications",
      "Native & cross-platform mobile apps",
      "Progressive Web Apps (PWAs)",
      "E-commerce platforms",
      "Custom CMS solutions",
      "API development & integration",
    ],
    tech: ["React", "Next.js", "React Native", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    icon: Code,
    title: "Software & Games Development",
    description:
      "Enterprise-grade software and game development solutions built for scalability, security, and performance.",
    features: [
      "Custom enterprise software",
      "SaaS product development",
      "Game development",
      "Cloud infrastructure",
      "DevOps & CI/CD",
      "System integration",
    ],
    tech: ["Unity", "Unreal Engine", "C#", "C++", "Node.js", "PostgreSQL"],
  },
  {
    icon: Gamepad2,
    title: "3D Simulation",
    description:
      "Realistic 3D simulations with interactive environments and real-time visualization for immersive experiences.",
    features: [
      "Training simulations",
      "Virtual prototyping",
      "Interactive environments",
      "Real-time visualization",
      "VR/AR experiences",
      "Physics-based simulations",
    ],
    tech: ["Unity", "Unreal Engine", "C#", "C++", "Blender", "OpenGL"],
  },
  {
    icon: Box,
    title: "3D Modelling & Stimulations",
    description:
      "Stunning 3D assets and visualizations for games, product showcases, architectural renders, and marketing materials.",
    features: [
      "3D character modeling",
      "Product visualization",
      "Architectural rendering",
      "Game assets & environments",
      "Animation & rigging",
      "VR/AR 3D content",
    ],
    tech: ["Blender", "Maya", "ZBrush", "Substance Painter", "Cinema 4D", "3ds Max"],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-3">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              End-to-End{" "}
              <span className="text-gradient-gold">Digital Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From concept to deployment, we provide comprehensive services to
              bring your digital vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-lg bg-gradient-gold flex items-center justify-center">
                      <service.icon size={28} className="text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-gold flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium text-muted-foreground bg-background px-3 py-1.5 rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center text-gold font-medium group"
                  >
                    Get a Quote
                    <ArrowRight
                      size={18}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>

                <div
                  className={`bg-card rounded-xl p-8 shadow-card ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="aspect-video rounded-lg bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <service.icon size={80} className="text-gold/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
