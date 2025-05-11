
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const proverbRoutes = require('./src/routes/proverbs');


dotenv.config();
    
const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology:true
}).then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));


app.use('/proverbs', proverbRoutes);


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});