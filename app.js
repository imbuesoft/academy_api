const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const passport = require('passport');

const patientRoutes = require('./routes/patientRoutes');
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');
const examRoutes = require('./routes/examRoutes');
const questionRoutes = require('./routes/questionRoutes');
const examQuestionRoutes = require('./routes/examQuestionRoutes');
const examStudentRoutes = require('./routes/examStudentRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;
app.use(bodyParser.json());

// Initialize Passport.js middleware
app.use(passport.initialize());

mongoose.connect('mongodb+srv://imbuesoftworld:mqmMHkuWGMtCCXlo@cluster0.sozqsp2.mongodb.net/internship',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use('/users', userRoutes);
app.use('/patients', patientRoutes);
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);
app.use('/exams', examRoutes);
app.use('/questions', questionRoutes);
app.use('/examQuestions', examQuestionRoutes);
app.use('/examStudents', examStudentRoutes);

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});

