const express = require('express');
const sequelize = require('./db');
const brewsRouter = require('./routes/brews');

const app = express();
app.use(express.json());
app.use('/api/brews', brewsRouter);

sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Server running on port 3001');
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});