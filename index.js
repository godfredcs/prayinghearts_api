const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const app = express();

app.use(helmet());

app.use('/src/public/uploads', express.static('src/public/uploads'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Import API Routes
const usersRoutes = require('./src/routes/usersRoute');
const postsRoutes = require('./src/routes/postsRoute');

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Nothing to see here really"
    });
});

// Pass all routes to appropriate route handlers.
app.use('/users', usersRoutes);
app.use('/posts', postsRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;

    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: "Not found"
        }
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('we are live'));