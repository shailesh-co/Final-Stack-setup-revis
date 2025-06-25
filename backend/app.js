const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const connected = require('./config/db');

dotenv.config();
connected();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth.routes'));

const PORT  = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`sertver connected  ${PORT}`));