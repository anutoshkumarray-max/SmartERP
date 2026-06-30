require('dotenv').config();

const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const companyRoutes = require('./routes/company'); // Ye line add ki

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/company', companyRoutes); // Ye line add ki

app.get('/test-db', (req, res) => {
    res.json({ message: "Server is running perfectly!" });
});

app.listen(8000, () => {
    console.log(`Server running on port 8000`);
});