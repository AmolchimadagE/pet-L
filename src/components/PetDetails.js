// components/PetDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PetDetails = ({ id }) => {
  const [pet, setPet] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://pets-v2.dev-apis.com/pets?id=${id}`)
      .then((response) => {
        setPet(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>{pet.name}</h1>
      <p>{pet.description}</p>
    </div>
  );
};

export default PetDetails;