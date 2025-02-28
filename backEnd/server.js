require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require("./config/database");

const userRoutes = require('./routes/userRoutes.js');

const queryRoutes = require('./routes/queryRoutes.js');

const app = express();
app.use(cors({
    origin: 'http://localhost:5173'  
}));
app.use(express.json());  

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});


app.use('/api/user', userRoutes);

app.use('/api/query', queryRoutes);

sequelize.authenticate()
  .then(() => console.log("Connected to MySQL using Sequelize"))
  .catch(err => console.error("Database connection error:", err));

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

