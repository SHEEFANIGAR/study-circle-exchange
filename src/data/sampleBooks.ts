
import { Book } from "../components/books/BookCard";

export const sampleBooks: Book[] = [
  {
    id: "1",
    title: "Organic Chemistry: Structure and Function",
    author: "K. Peter C. Vollhardt & Neil E. Schore",
    imageUrl: "https://m.media-amazon.com/images/I/91-D-O4LJwL._AC_UF1000,1000_QL80_.jpg",
    condition: "Very Good",
    category: "Chemistry",
    owner: {
      name: "Alex Johnson",
      campus: "Stanford University",
    },
  },
  {
    id: "2",
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    imageUrl: "https://m.media-amazon.com/images/I/41T0iBxY8FL._AC_UF1000,1000_QL80_.jpg",
    condition: "Good",
    category: "Computer Science",
    owner: {
      name: "Maria Garcia",
      campus: "MIT",
    },
  },
  {
    id: "3",
    title: "Physics for Scientists and Engineers",
    author: "Raymond A. Serway",
    imageUrl: "https://m.media-amazon.com/images/I/81Cm3+PKwqL._AC_UF1000,1000_QL80_.jpg",
    condition: "Like New",
    category: "Physics",
    owner: {
      name: "David Kim",
      campus: "UC Berkeley",
    },
  },
  {
    id: "4",
    title: "Principles of Economics",
    author: "N. Gregory Mankiw",
    imageUrl: "https://m.media-amazon.com/images/I/51tjoP5lMuL.jpg",
    condition: "Good",
    category: "Economics",
    owner: {
      name: "Sophie Wilson",
      campus: "Harvard University",
    },
  },
  {
    id: "5",
    title: "Campbell Biology",
    author: "Lisa A. Urry & Michael L. Cain",
    imageUrl: "https://m.media-amazon.com/images/I/91+-- sxcQRL._AC_UF1000,1000_QL80_.jpg",
    condition: "Fair",
    category: "Biology",
    owner: {
      name: "James Rodriguez",
      campus: "UCLA",
    },
  },
  {
    id: "6",
    title: "Calculus: Early Transcendentals",
    author: "James Stewart",
    imageUrl: "https://m.media-amazon.com/images/I/71yCz4v9ImL._AC_UF1000,1000_QL80_.jpg",
    condition: "New",
    category: "Mathematics",
    owner: {
      name: "Emily Chen",
      campus: "Yale University",
    },
  },
  {
    id: "7",
    title: "Psychology: From Inquiry to Understanding",
    author: "Scott O. Lilienfeld",
    imageUrl: "https://m.media-amazon.com/images/I/815u0iwVM9L._AC_UF1000,1000_QL80_.jpg",
    condition: "Good",
    category: "Psychology",
    owner: {
      name: "Michael Brown",
      campus: "Columbia University",
    },
  },
  {
    id: "8",
    title: "Environmental Science: A Global Concern",
    author: "William P. Cunningham",
    imageUrl: "https://m.media-amazon.com/images/I/91iIWxF5XjL._AC_UF1000,1000_QL80_.jpg",
    condition: "Very Good",
    category: "Environmental Science",
    owner: {
      name: "Olivia Martinez",
      campus: "University of Michigan",
    },
  },
];

export const recentlyAdded = sampleBooks.slice(0, 4);
export const popularBooks = [sampleBooks[2], sampleBooks[5], sampleBooks[1], sampleBooks[7]];
