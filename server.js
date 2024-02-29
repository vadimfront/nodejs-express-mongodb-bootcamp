//const mongodb = require('mongodb');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
//const Tour = require('./models/tourModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);
mongoose
  .connect(DB)
  .then(() => console.log('Connected!'))
  .catch((err) => console.log('No conection!'));

// const testTour = new Tour({
//   name: 'The Forest Hiker',
//   rating: 4.7,
//   price: 497,
// });

// testTour
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
