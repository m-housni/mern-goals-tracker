const express = require("express");
const dotenv = require('dotenv').config()

const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/goals', require('./routes/goalRoutes.js'))

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
