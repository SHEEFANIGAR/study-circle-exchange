
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-br from-bookworm-navy to-bookworm-green py-16 md:py-24 text-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold md:text-4xl lg:text-5xl">
            Ready to join the BookwormSwap community?
          </h2>
          <p className="mt-6 text-lg text-white/80">
            Start sharing resources, saving money, and making a positive environmental impact today.
          </p>
          <div className="mt-8 flex flex-col space-y-3 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg" variant="default" className="bg-white text-bookworm-navy hover:bg-white/90">
              <Link to="/register">Join Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-bookworm-navy">
              <Link to="/browse">Explore Resources</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
