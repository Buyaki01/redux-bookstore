import BookItem from './BookItem';

const BooksList = () => {
  const booksArray = [
    {
      title: 'The Hunger Games',
      id: 0,
      author: 'Suzanne Collins',
    },
    {
      title: 'The Awesomeness',
      id: 1,
      author: 'Erick Collins',
    },
  ];
  return (
    <section>
      {booksArray.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </section>
  );
};

export default BooksList;
