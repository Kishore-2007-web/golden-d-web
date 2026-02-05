import { Shield, Zap, Users, Award, Clock, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Quality First",
    description: "We deliver pixel-perfect, production-ready code that stands the test of time.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Agile development practices ensure rapid iterations and timely launches.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Senior developers with deep expertise across multiple technologies.",
  },
  {
    icon: Award,
    title: "Innovation Driven",
    description: "Cutting-edge solutions using the latest technologies and best practices.",
  },
  {
    icon: Clock,
    title: "On-Time, On-Budget",
    description: "Transparent processes and realistic timelines you can count on.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Ongoing maintenance and support long after your project launches.",
  },
];

const WhyUs = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Golden Z Vision?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We combine technical excellence with creative innovation to deliver
              digital products that drive real business results. Our commitment to
              quality and client success sets us apart.
            </p>
            <div className="flex items-center gap-8">
              <div>
                <p className="text-4xl font-bold text-gold">98%</p>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-4xl font-bold text-gold">100%</p>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-border hover:border-gold/30 transition-colors group"
              >
                <reason.icon
                  size={24}
                  className="text-gold mb-4 group-hover:scale-110 transition-transform"
                />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
