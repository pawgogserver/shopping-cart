const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());

require('dotenv').config();

const userRoute = require('./router');

mongoose.Promise = global.Promise;
mongoose
  .connect(
    `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds133353.mlab.com:33353/${process.env.DB_HOST}`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => console.log('DB Connected'))
  .catch((err) => {
    console.log(`DB Connection Error: ${err.message}`);
  });

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use('/', userRoute);

app.listen(process.env.PORT, () => {
  console.log('Connected to port ' + process.env.PORT);
});

app.use((err, req, res, next) => {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
