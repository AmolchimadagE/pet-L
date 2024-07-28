import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PetList = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://pets-v2.dev-apis.com/pets')
      .then((response) => {
        setPets(response.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          setError(error.response.data);
        } else {
          setError(error);
        }
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!pets.length) {
    return <p>No pets found.</p>;
  }

  return (
    <ul>
      {pets.map((pet) => (
        <li key={pet.id}>
          <Link to={`/pets/${pet.id}`}>{pet.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PetList;