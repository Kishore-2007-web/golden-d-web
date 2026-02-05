import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Billing Software",
    category: "Software Development",
    description: "A robust billing and invoicing software designed to manage customers, generate invoices, track payments, and simplify financial operations for businesses.",
    tech: ["Software", "Billing", "Web", "Cloud"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
  },
];

const Portfolio = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-3">
            Our Work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground">
            Real projects, real results. Explore our portfolio of successful digital products.
          </p>
        </div>

        {/* Projects - Single Centered Card */}
        <div className="flex justify-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-xl overflow-hidden shadow-card card-hover group max-w-md w-full"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium text-primary-foreground bg-gold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <ExternalLink size={20} className="text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center text-gold text-sm font-medium group/link"
                >
                  View Product
                  <ArrowRight
                    size={16}
                    className="ml-1 group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/contact" className="btn-gold">
            Get Started
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
