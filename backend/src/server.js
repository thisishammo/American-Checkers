const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
const sequelize = require('./config/database'); // Sequelize instance
const authRoutes = require('./routes/auth');
const leaderboardRoutes = require('./routes/leaderboard');
const gameSocket = require('./services/gameSocket');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
    cors: { origin: '*' },
});

console.log(__dirname); // For debugging: prints the directory of server.js

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/leaderboard', leaderboardRoutes);
// ... other routes as needed

// Real-time communication
io.on('connection', (socket) => {
    console.log('New client connected');
    gameSocket(io, socket);
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Synchronize models and start server
const PORT = process.env.PORT || 5000;

sequelize.authenticate()
    .then(() => {
        console.log('Database connection established successfully.');
        return sequelize.sync(); // Sync all defined models to the DB
    })
    .then(() => {
        console.log('All models were synchronized successfully.');
        server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    }); 