const express = require('express')
const app = express();
const secureMiddleWare = require('../backend/middlewares/secureMiddleware')
const authRoutes = require('./routes/auth/authRoutes');
const { sequelize } = require('../backend/db/db')
require('dotenv').config()



//MiddleWare
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//secure middleware
secureMiddleWare(app)

app.use('/api', require('./routes/index'));

// internal server eror 
app.use((err, req, res, next) => {
    res.status(500).json({ error: 'Intenral Server Error', message: err.message })
})
//server listen
const PORT = process.env.PORT || 5000;

// for create table 
sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });
