import React, { useEffect, useState } from "react";
import axios from 'axios';

const BookInfoApp = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("https://reactnd-books-api.udacity.com/books", {headers: { Authorization: "whatever-you-want" }});
        setBooks(response.data.books);
      } catch (error) {
        console.error("Error fetching books:", error.message);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <div style={{display: "flex", alignItems: "center"}}>
            <div style={{marginRight: "20px"}}>
              <img src={book.imageLinks.thumbnail} alt="book_img" width={150} />
            </div>
            <div className="description-container">
              <p>{book.description}</p>
            </div>
          </div>
          <p>{book.authors.join(", ")}</p>
          <hr/>
        </div>
      ))}
    </div>
  );
};

export default BookInfoApp;