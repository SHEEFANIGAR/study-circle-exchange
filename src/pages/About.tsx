
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Leaf, UserCheck, MessageSquare } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Knowledge Sharing",
      description: "We believe in democratizing access to educational resources for all students."
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainability",
      description: "Our platform helps reduce waste by promoting the reuse of academic materials."
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "Community Trust",
      description: "We verify all users to ensure a safe and reliable exchange environment."
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Collaboration",
      description: "BookwormSwap fosters connections between students across different disciplines."
    }
  ];

  return (
    <MainLayout>
      <div className="bg-bookworm-beige py-12">
        <div className="container">
          <h1 className="font-serif text-3xl font-bold md:text-4xl">About BookwormSwap</h1>
          <p className="mt-4 text-muted-foreground">
            Our mission, values, and the story behind our platform.
          </p>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl font-bold md:text-3xl">Our Mission</h2>
            <div className="mt-6 space-y-4">
              <p>
                BookwormSwap was founded with a simple mission: to make education more accessible and sustainable by creating a platform where students can easily share academic resources.
              </p>
              <p>
                We believe that textbooks and study materials shouldn't be a financial burden on students, and that by creating a circular economy of educational resources, we can reduce waste while helping students succeed.
              </p>
              <p>
                Our platform aims to build campus communities where knowledge is freely shared, connections are made, and environmental impact is reduced through conscious reuse.
              </p>
            </div>
          </div>
          <div className="relative order-first md:order-last">
            <div className="aspect-square overflow-hidden rounded-lg bg-bookworm-navy">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Students sharing resources"
                className="h-full w-full object-cover opacity-70"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded bg-bookworm-green"></div>
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded bg-bookworm-gold"></div>
          </div>
        </div>

        <div className="my-20">
          <h2 className="mb-12 text-center font-serif text-2xl font-bold md:text-3xl">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <div className="mb-4 text-bookworm-green">{value.icon}</div>
                <h3 className="mb-2 font-serif text-xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-bookworm-green p-8 text-white md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="font-serif text-2xl font-bold md:text-3xl">Join Our Community</h2>
              <p className="mt-4">
                BookwormSwap is more than just a resource sharing platform—it's a community of like-minded students committed to helping each other succeed while making environmentally conscious choices.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-white text-bookworm-green hover:bg-white/90">
                  <Link to="/register">Become a Member</Link>
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold">Environmental Impact</h3>
              <p className="mt-2 mb-6">
                By participating in BookwormSwap, you're helping to:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Reduce paper waste from unused textbooks</li>
                <li>Lower carbon emissions from new book production</li>
                <li>Decrease packaging waste from online book orders</li>
                <li>Create a culture of reuse and sustainability on campus</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
