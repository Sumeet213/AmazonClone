const functions = require('firebase-functions');

const express = require('express');

const cors = require('cors');
const { response } = require('express');

const stripe = require('stripe')(
  'sk_test_51Lo1HrSCN8XlbUnIJ5nw90MNIrTdjAO08TSf9ezTBMRNe52b9Bj3h47wb8FRAcLQ4uNkzwE3xAoPiSg7Vx9Bgxls00YECCjVpL'
);

//API

//App config
const app = express();

//Middlewares

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );

  // Request headers you wish to allow
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
//Api routes
app.get('/', (req, res) => res.status(200).send('hello world'));
app.get('/test', (req, res) => res.status(200).send('hello world12'));
app.post('/payments/create', async (req, res) => {
  const total = req.query.total;
  console.log('Payment Request Recieved boom!! for this amount', total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//Listen command
exports.api = functions.https.onRequest(app);
//http://localhost:5001/clone-828b7/us-central1/api
