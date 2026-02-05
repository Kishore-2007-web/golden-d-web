import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Heart, Users, Award, Globe } from "lucide-react";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "10+", label: "Team Members" },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for perfection in every line of code and every pixel we design.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We're genuinely passionate about technology and creating impactful solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients, treating their success as our own.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description: "We embrace cutting-edge technologies to deliver future-proof solutions.",
  },
];

const team = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Sarah Johnson",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "David Kim",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Emily Rodriguez",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-3">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Building the Future,{" "}
              <span className="text-gradient-gold">One Product at a Time</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We're a team of passionate technologists, designers, and innovators
              dedicated to transforming ideas into exceptional digital products.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-gold mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-3">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                From Vision to Reality
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Golden Z Vision was founded with a simple mission: to help
                  businesses and entrepreneurs bring their digital ideas to life.
                  What started as a small team of passionate developers has grown
                  into a full-service digital product studio.
                </p>
                <p>
                We specialize in building scalable, high-quality applications
                across app, web, software, games, 3D simulation, and 3D modelling. Our team combines
                technical expertise with creative thinking to deliver solutions
                  that not only meet but exceed expectations.
                </p>
                <p>
                  Today, we serve clients worldwide—from ambitious startups to
                  established enterprises—helping them navigate the digital
                  landscape and achieve their goals.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-xl bg-gradient-gold flex items-center justify-center">
                  <Globe size={64} className="text-primary" />
                </div>
                <div className="h-32 rounded-xl bg-muted flex items-center justify-center">
                  <Award size={48} className="text-gold" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-32 rounded-xl bg-muted flex items-center justify-center">
                  <Target size={48} className="text-gold" />
                </div>
                <div className="h-48 rounded-xl bg-primary flex items-center justify-center">
                  <Heart size={64} className="text-gold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-3">
              Our Values
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 text-center card-hover shadow-card"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-gold flex items-center justify-center mb-6">
                  <value.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-3">
              Our Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet the Experts
            </h2>
            <p className="text-muted-foreground">
              A diverse team of talented professionals passionate about creating
              exceptional digital experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 rounded-xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-gold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
