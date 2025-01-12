const express = require('express'); // Import Express to create the server
const dotenv = require('dotenv'); // Load environment variables from a `.env` file
const mongoose = require('mongoose'); // Import Mongoose to interact with MongoDB
const connectDB = require('./config/db'); // Import the database connection function
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');
const crypto = require('crypto');
const cors = require('cors');

dotenv.config();  // This will load the .env file variables

const app = express();
const PORT = process.env.PORT || 5000;

console.log('MONGO_URI:', process.env.MONGO_URI);  // Should log your MongoDB URI

app.use(cors()); // Enable CORS for all routes

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000', // Allow only this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
    credentials: true, // Allow cookies and authentication headers
  })
);
// Connect to the database
connectDB();

// Simple route to check if the API is running
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Define a simple schema and model for testing
const TestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Test = mongoose.model('Test', TestSchema);

// Create a route that inserts a test document
app.get('/create', async (req, res) => {
  try {
    // Create a new instance of the Test model
    const testDoc = new Test({
      name: 'Test Document',  // You can change this value to whatever you like
    });

    // Save the document to MongoDB
    await testDoc.save();

    // Respond with a success message
    res.send('Test document inserted!');
  } catch (err) {
    // If there's an error, respond with the error message
    res.status(500).send('Error inserting document: ' + err.message);
  }
});

app.use('/api/auth', authRoutes);
app.use('/api/protected', protectedRoutes);


// Generate a random JWT secret key (256-bit key)
//const jwtSecret = crypto.randomBytes(32).toString('hex');
const jwtSecret = process.env.JWT_SECRET;

//console.log(jwtSecret); // Print the generated secret key


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
