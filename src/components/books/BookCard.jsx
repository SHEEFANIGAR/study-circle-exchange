
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { useState } from "react";

const BookCard = ({ book }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const getConditionColor = (condition) => {
    switch (condition) {
      case "New":
        return "bg-green-100 text-green-800";
      case "Like New":
        return "bg-emerald-100 text-emerald-800";
      case "Very Good":
        return "bg-cyan-100 text-cyan-800";
      case "Good":
        return "bg-blue-100 text-blue-800";
      case "Fair":
        return "bg-yellow-100 text-yellow-800";
      case "Poor":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Link to={`/books/${book.id}`}>
      <Card className="book-card group h-full">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={book.imageUrl}
              alt={book.title}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 rounded-full bg-white/80 backdrop-blur hover:bg-white"
            onClick={toggleWishlist}
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
          </Button>
          <Badge
            className={`absolute bottom-2 left-2 ${getConditionColor(book.condition)}`}
          >
            {book.condition}
          </Badge>
        </div>
        <CardContent className="p-4">
          <h3 className="line-clamp-2 font-serif text-lg font-bold">{book.title}</h3>
          <p className="text-sm text-muted-foreground">{book.author}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t p-4">
          <Badge variant="outline">{book.category}</Badge>
          <span className="text-xs text-muted-foreground">{book.owner.campus}</span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BookCard;
