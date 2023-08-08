const express = require('express');
const bodyParser = require('body-parser');
const twikoo = require('twikoo');

const app = express();
app.use(bodyParser.json());

// Twikoo backend configuration
twikoo.config({
  envId: process.env.TWIKOO_ENV_ID,
  adminUsername: process.env.TWIKOO_ADMIN_USERNAME,
  adminPassword: process.env.TWIKOO_ADMIN_PASSWORD,
});

// Twikoo comment API endpoint
app.post('/api/comment', (req, res) => {
  twikoo.comment(req, res);
});

// Serve the app
app.listen(9000, () => {
  console.log('Twikoo backend is running on port 9000');
});
