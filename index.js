require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');
const mongoose = require('mongoose');

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use('/admin', adminRouter);
app.use('/user', userRouter);

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Database connected'))
.catch((error) => console.error('Database connection error:', error));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



