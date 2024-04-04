
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./dbconfig');
const routesCourse = require('./routers/routes')
const Course = require('./models/course');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/admin',routesCourse);

// Synchronize models with the database
db.sync()
    .then(() => {
        console.log('Database synced');
        app.listen(port, () => {
            console.log(`Server is up and running on port ${port}`);
        });
    })
    .catch(err => {
        console.error('Error syncing database', err);
    });




