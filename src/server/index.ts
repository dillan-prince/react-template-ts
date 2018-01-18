import app from './App';

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`Server listening on port ${PORT}`);
});
