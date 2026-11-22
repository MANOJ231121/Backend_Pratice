// const express = require('express'); yeh jo hai yeh sync call hota hai tho iska type commonjs hota hai aur agar hum import express from 'express' use karte hai tho yeh async call hota hai tho iska type module hota hai.
import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
})
app.get('/api', (req, res) => {
  res.send({ message: 'This is the API endpoint' });
});
app.get('/api/data', (req, res) => {
  res.send({ data: 'This is some API data' });
});
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];
  res.send({ users });
});

app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
