
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import BookGrid from "@/components/books/BookGrid";
import { sampleBooks } from "@/data/sampleBooks";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const Browse = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [condition, setCondition] = useState("all");

  const categories = ["all", "Biology", "Chemistry", "Computer Science", "Economics", "Environmental Science", "Mathematics", "Physics", "Psychology"];
  const conditions = ["all", "New", "Like New", "Very Good", "Good", "Fair", "Poor"];

  const filteredBooks = sampleBooks.filter(book => {
    const matchesSearch = 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "all" || book.category === category;
    const matchesCondition = condition === "all" || book.condition === condition;

    return matchesSearch && matchesCategory && matchesCondition;
  });

  return (
    <MainLayout>
      <div className="bg-bookworm-beige py-12">
        <div className="container">
          <h1 className="font-serif text-3xl font-bold md:text-4xl">Browse Resources</h1>
          <p className="mt-4 text-muted-foreground">
            Find textbooks, notes, and study materials shared by your campus community.
          </p>
        </div>
      </div>

      <div className="container py-8">
        <div className="mb-8 rounded-lg border bg-card p-4 shadow-sm">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by title or author..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat === "all" ? "All Categories" : cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Select value={condition} onValueChange={setCondition}>
                <SelectTrigger>
                  <SelectValue placeholder="Condition" />
                </SelectTrigger>
                <SelectContent>
                  {conditions.map((cond) => (
                    <SelectItem key={cond} value={cond}>
                      {cond === "all" ? "All Conditions" : cond}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {filteredBooks.length > 0 ? (
          <BookGrid books={filteredBooks} />
        ) : (
          <div className="my-16 text-center">
            <h3 className="mb-2 text-xl font-bold">No resources found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or check back later for new resources.
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Browse;
