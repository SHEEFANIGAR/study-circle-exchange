
import { BookOpen, Users, Heart, Leaf } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "Resource Sharing",
      description: "Share textbooks, notes, lab records, and study guides with fellow students."
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Campus Community",
      description: "Connect with verified students from your campus for local exchanges."
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Wishlist Alerts",
      description: "Get notified when a book on your wishlist becomes available."
    },
    {
      icon: <Leaf className="h-10 w-10" />,
      title: "Eco-Friendly",
      description: "Track your environmental impact by reusing academic resources."
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">
            Why Join <span className="text-bookworm-green">BookwormSwap</span>?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our platform makes it easy to exchange academic resources while building a sustainable campus community.
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                {feature.icon}
              </div>
              <h3 className="mb-2 font-serif text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
