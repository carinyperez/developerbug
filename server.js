const express = require('express');
const connectDB = require('./config/db'); 

// creates an express application  
const app = express(); 
const users = require('./routes/api/users'); 
const auth = require('./routes/api/auth');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');
const path = require('path');
// Connect Database 
connectDB(); 
// Init Middleware for body parser 
//parses json and only looks at requests where the Content-Type header matches the type option
app.use(express.json({extended: false}))

// app.get('/', (req, res) => res.send('API Running'));

// Define routes 
app.use('/api/users',users); 
app.use('/api/auth', auth);
app.use('/api/posts', posts); 
app.use('/api/profile', profile);

//Serve static assets in production 
if(process.env.NODE_ENV === 'production') {
    //set static folder 
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); 