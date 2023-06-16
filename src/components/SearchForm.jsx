import React, { useState } from 'react';
import { useGlobalContext } from '../context/context';

const SearchForm = () => {
  const { searchInput, setSearchInput } = useGlobalContext();

  const [search, setSearch] = useState(searchInput || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.elements.search.value);
    // const searchValue = e.target.elements.search.value;
    if (!search) {
      return;
    }

    localStorage.setItem('searchItem', search);
    setSearchInput(search);
  };
  return (
    <section>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
