
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "BookwormSwap helped me save over $500 on textbooks this semester alone! The process was so easy and I met some great people from my campus.",
      author: "Sarah J.",
      role: "Biology Major, UC Berkeley"
    },
    {
      quote: "As an engineering student, textbooks are incredibly expensive. This platform has been a game-changer for me financially and environmentally.",
      author: "Michael T.",
      role: "Engineering, MIT"
    },
    {
      quote: "I love how the platform tracks environmental impact. It's rewarding to see how many trees we're saving by reusing these resources.",
      author: "Priya K.",
      role: "Environmental Studies, UCLA"
    },
    {
      quote: "The wishlist feature is amazing! I got notified immediately when someone listed the rare edition I needed for my research project.",
      author: "David L.",
      role: "History Major, Stanford"
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Student Success Stories</h2>
          <p className="mt-4 text-muted-foreground">
            Hear from students who have transformed their academic journey through resource sharing.
          </p>
        </div>

        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
            }}
            className="mx-auto max-w-5xl"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card>
                      <CardContent className="flex flex-col items-start space-y-4 p-6">
                        <svg
                          className="h-8 w-8 text-bookworm-green opacity-70"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10 8c-3.3 0-6 2.7-6 6v8h8v-8h-4c0-2.2 1.8-4 4-4v-2zm14 0c-3.3 0-6 2.7-6 6v8h8v-8h-4c0-2.2 1.8-4 4-4v-2z" />
                        </svg>
                        <p className="text-foreground">{testimonial.quote}</p>
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
