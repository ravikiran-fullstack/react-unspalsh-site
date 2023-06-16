import React from 'react';
import { useGlobalContext } from '../context/context';

const SearchForm = () => {
  const { setSearchInput } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.elements.search.value);
    const searchValue = e.target.elements.search.value;
    if (!searchValue) {
      return;
    }

    // console.log(searchValue);
    setSearchInput(searchValue);
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
