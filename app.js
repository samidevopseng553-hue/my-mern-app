const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.json({msg: 'Hello World!'});
}); 

app.get('/health', (req, res) => {
  res.json({msg: 'Server is healthy'});
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
