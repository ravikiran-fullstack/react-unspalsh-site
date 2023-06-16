import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const url =
  'https://api.unsplash.com/search/photos?page=1&query=dogs&client_id=eHP3GYDnv69BF75tuVq2eq6qhsR5i-u10vcojPuOgS4';

const Gallery = () => {
  const response = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const result = await axios.get(url);

      return result.data;
    },
  });

  console.log(response);

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
  console.log(results);

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
        console.log(url);
        return <img src={url} alt={item.alt_description} className="img" />;
      })}
    </section>
  );
};

export default Gallery;
