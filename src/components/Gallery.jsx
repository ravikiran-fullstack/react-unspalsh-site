import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useGlobalContext } from '../context/context';

const Gallery = () => {
  let url = '';
  const apiKey = import.meta.env.VITE_API_KEY;

  const { searchInput } = useGlobalContext();

  const response = useQuery({
    queryKey: ['images', searchInput],
    queryFn: async () => {
      const result = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=${searchInput}&client_id=${apiKey}`
      );
      return result.data;
    },
  });

  // console.log(response);

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There was an error</h4>
      </section>
    );
  }

  const results = response.data.results;
  // console.log(results);

  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        // console.log(url);
        return (
          <img key={url} src={url} alt={item.alt_description} className="img" />
        );
      })}
    </section>
  );
};

export default Gallery;
