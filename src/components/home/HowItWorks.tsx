
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create an Account",
      description: "Register with your campus email to join your university's community."
    },
    {
      number: "02",
      title: "List Your Resources",
      description: "Add textbooks, notes, or study materials you're willing to share."
    },
    {
      number: "03",
      title: "Browse & Connect",
      description: "Find resources you need and connect with fellow students."
    },
    {
      number: "04",
      title: "Exchange & Enjoy",
      description: "Meet up safely on campus to exchange materials and earn swap points."
    }
  ];

  return (
    <section className="bg-bookworm-beige py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">How It Works</h2>
          <p className="mt-4 text-muted-foreground">
            Getting started with BookwormSwap is easy. Follow these simple steps to begin sharing resources.
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 font-serif text-5xl font-black text-bookworm-green/20">
                {step.number}
              </div>
              <h3 className="mb-2 font-serif text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/register">Get Started Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
