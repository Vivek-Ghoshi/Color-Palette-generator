const express = require('express');
const db = require('./config/mongooseConnection')
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


const paletteRoutes = require('./routes/paletteRoute');
app.use('/api',paletteRoutes);



const PORT = 3000;
app.listen(PORT);
