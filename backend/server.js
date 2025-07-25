const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const resumeRoutes = require('./routes/resumeRoutes');

const app = express();
app.use(cors());
app.use(express.json());

const path = require('path');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));

// The "catchall" handler: for any request that doesn't match an API route, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.use('/api/resumes', resumeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 