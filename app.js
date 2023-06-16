const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
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

mongoose.connect('mongodb+srv://<username>:<password>@<cluster>/<dbname>?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

//localhost:3000/patients/:id
app.use('/patients', patientRoutes);
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);
app.use('/exams', examRoutes);
app.use('/questions', questionRoutes);
app.use('/examQuestions', examQuestionRoutes);
app.use('/examStudents', examStudentRoutes);
app.use('/users', userRoutes);


app.listen(port, () => {
    console.log('Server is running on port ' + port);
});

