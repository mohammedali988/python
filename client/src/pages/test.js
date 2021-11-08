import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { TextField } from '@mui/material';

const Test = () => {
  const [firstName, setFirstName] = useState('');
  const [person, setPerson] = useState('');

  const addPhoto = (e) => {
    console.log(firstName);
    const data = new FormData();
    data.append('firstName', firstName);
    data.append('image', person, person.name);
    axios
      .post('http://localhost:8000/task/Member', data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h1>HIIII</h1>
      <input type="text" onChange={(e) => setFirstName(e.target.value)} />
      <input type="file" onChange={(e) => setPerson(e.target.files[0])} />
      <button onClick={addPhoto}>add</button>
    </>
  );
};

export default Test;
