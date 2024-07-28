// components/SearchForm.js
import React, { useState } from 'react';

const SearchForm = () => {
  const [animal, setAnimal] = useState('');
  const [location, setLocation] = useState('');
  const [breed, setBreed] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API to search for pets
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Animal:
        <input type="text" value={animal} onChange={(event) => setAnimal(event.target.value)} />
      </label>
      <label>
        Location:
        <input type="text" value={location} onChange={(event) => setLocation(event.target.value)} />
      </label>
      <label>
        Breed:
        <input type="text" value={breed} onChange={(event) => setBreed(event.target.value)} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;