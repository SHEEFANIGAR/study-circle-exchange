
import BookCard from "./BookCard";

const BookGrid = ({ books, title }) => {
  return (
    <section className="py-8">
      {title && <h2 className="mb-6 text-2xl font-bold md:text-3xl">{title}</h2>}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default BookGrid;
