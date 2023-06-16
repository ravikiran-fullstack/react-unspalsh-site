import React from 'react';

const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.elements.search.value);
    const searchValue = e.target.elements.search.value;
    if (!searchValue) {
      return;
    }

    console.log(searchValue);
  };
  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          className="form-input search-input"
          placeholder="Animals"
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
