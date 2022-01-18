const InputAddBook = () => (
  <section className="newBookSec">
    <h2 className="newBookHeading">ADD NEW BOOK</h2>
    <form action="#" className="formSection">
      <label htmlFor="titel" className="bookTitle">
        <input
          className="inputSec"
          type="text"
          name="titel"
          id="titel"
          placeholder="Bookt title..."
        />
      </label>
      <label htmlFor="book-category" className="bookCategorySec">
        <select name="book-category" id="category" className="inputBookCategory">
          <option value="Category" hidden>
            Category
          </option>
          <option value="Category">Action</option>
          <option value="Category">Adventure</option>
        </select>
      </label>
      <button type="submit" className="addBookBtn">
        <span> ADD BOOK </span>
      </button>
    </form>
  </section>
);

export default InputAddBook;
