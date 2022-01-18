import PropTypes from 'prop-types';

const BookItem = (props) => {
  const { book: { title, author } } = props;
  return (
    <div className="bookItemContainer">
      <div className="booksSection">
        <div>
          <h3 className="bookItemCategory">Action</h3>
        </div>
        <h2>
          {' '}
          {title}
          {' '}
        </h2>
        <h4 className="bookAuthor">
          {' '}
          {author}
          {' '}
        </h4>
        <div className="userBtn">
          <button type="button" className="commentsBtn">Comments</button>
          <button type="button" className="removeBtn">Remove</button>
          <button type="button" className="editBtn">Edit</button>
        </div>
      </div>

      <div className="progressContainer">
        <p> 64% </p>
        <h6>Completed</h6>
      </div>

      <div>
        <h4 className="currentChapter">CURRENT CHAPTER</h4>
        <h5 className="chapter">Chapter 17</h5>
        <button type="button" className="updateProgressBtn">
          <span> UPDATE PROGRESS </span>
        </button>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default BookItem;
