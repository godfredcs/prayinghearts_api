const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet());

// Import API Routes
const usersRoutes = require('./src/routes/users');
const postsRoutes = require('./src/routes/posts');

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Nothing to see here really"
    });
});

app.use('/users', usersRoutes);
app.use('/posts', postsRoutes);





app.listen(8000, () => console.log('we are live'));