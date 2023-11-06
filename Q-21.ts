//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Create an array of book objects
let books: { title: string; author: string; year: number }[] = [
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  ];
  
  // Print the details of each book
  console.log("List of Books:");
  for (const book of books) {
    console.log(`Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`);
  }
  