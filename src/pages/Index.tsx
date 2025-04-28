
import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import Stats from "@/components/home/Stats";
import BookGrid from "@/components/books/BookGrid";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
import { recentlyAdded, popularBooks } from "@/data/sampleBooks";

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <div className="container py-16">
        <BookGrid books={recentlyAdded} title="Recently Added" />
      </div>
      <HowItWorks />
      <div className="container py-16">
        <BookGrid books={popularBooks} title="Popular Resources" />
      </div>
      <Stats />
      <Testimonials />
      <CTASection />
    </MainLayout>
  );
};

export default Index;
