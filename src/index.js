import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";
import Book from "./book";

const BookList = () => {
  const getBook = (id) => {
    let found = books.find((book) => book.id === id);
    console.log(found);
  };
  return (
    <div>
      <h1 className="title">My Book List</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return (
            <Book {...book} key={book.id} getBook={getBook} number={index} />
          );
        })}
      </section>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
