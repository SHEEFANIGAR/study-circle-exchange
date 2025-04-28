
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const Wishlist = () => {
  // Sample wishlist items
  const wishlistItems = [
    {
      id: "1",
      title: "Organic Chemistry: Structure and Function",
      author: "K. Peter C. Vollhardt & Neil E. Schore",
      imageUrl: "https://m.media-amazon.com/images/I/91-D-O4LJwL._AC_UF1000,1000_QL80_.jpg",
      category: "Chemistry"
    },
    {
      id: "6",
      title: "Calculus: Early Transcendentals",
      author: "James Stewart",
      imageUrl: "https://m.media-amazon.com/images/I/71yCz4v9ImL._AC_UF1000,1000_QL80_.jpg",
      category: "Mathematics"
    },
    {
      id: "8",
      title: "Environmental Science: A Global Concern",
      author: "William P. Cunningham",
      imageUrl: "https://m.media-amazon.com/images/I/91iIWxF5XjL._AC_UF1000,1000_QL80_.jpg",
      category: "Environmental Science"
    }
  ];

  return (
    <MainLayout>
      <div className="bg-bookworm-beige py-12">
        <div className="container">
          <h1 className="font-serif text-3xl font-bold md:text-4xl">My Wishlist</h1>
          <p className="mt-4 text-muted-foreground">
            Resources you're interested in. You'll be notified when they become available.
          </p>
        </div>
      </div>

      <div className="container py-8">
        {wishlistItems.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {wishlistItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="h-full w-full object-cover" 
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.author}</p>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm">Category: <span className="font-medium">{item.category}</span></p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline">
                    <Link to={`/books/${item.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="my-16 text-center">
            <h3 className="mb-2 text-xl font-bold">Your wishlist is empty</h3>
            <p className="mb-6 text-muted-foreground">
              Browse resources and add items to your wishlist to get notified when they become available.
            </p>
            <Button asChild>
              <Link to="/browse">Browse Resources</Link>
            </Button>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Wishlist;
