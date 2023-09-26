const Book = ({ image, title, author, getBook, id, number }) => {
  const inlineStyle = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.25rem",
  };
  return (
    <article className="book">
      <div className="numbering">{number+1}</div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <button onClick={() => getBook(id)}>click Me</button>
      <h4 style={inlineStyle}>{author.toUpperCase()}</h4>
    </article>
  );
};
export default Book;
