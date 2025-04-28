
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-bookworm-beige to-white py-16 md:py-24">
      <div className="container relative z-10">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Share Knowledge,<br />
              <span className="text-bookworm-green">Save Resources</span>
            </h1>
            <p className="mx-auto text-lg text-muted-foreground md:mx-0 md:max-w-md">
              A sustainable platform for students to share textbooks, notes, and academic resources with their campus community.
            </p>
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0 md:justify-start">
              <Button asChild size="lg">
                <Link to="/register">Join the Community</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/browse">Browse Resources</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Already a member? <Link to="/login" className="font-medium text-bookworm-green hover:underline">Sign in</Link>
            </p>
          </div>
          
          <div className="hidden items-center justify-center md:flex">
            <div className="relative">
              {/* Book stack illustration */}
              <div className="relative h-96 w-96 rotate-3 rounded-lg bg-bookworm-navy p-6 shadow-xl">
                <div className="absolute -left-5 -top-8 h-full w-full -rotate-6 rounded-lg bg-bookworm-green p-6 shadow-xl">
                  <div className="absolute -left-5 -top-8 h-full w-full rotate-12 rounded-lg bg-bookworm-gold p-6 shadow-xl">
                  </div>
                </div>
              </div>
              {/* Floating book elements */}
              <div className="absolute -right-10 -top-10 h-24 w-24 rotate-12 rounded bg-bookworm-lightGreen shadow-md"></div>
              <div className="absolute -bottom-12 left-10 h-20 w-32 -rotate-6 rounded bg-bookworm-beige shadow-md"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-bookworm-gold/20 blur-3xl"></div>
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-bookworm-green/10 blur-3xl"></div>
    </section>
  );
};

export default Hero;
