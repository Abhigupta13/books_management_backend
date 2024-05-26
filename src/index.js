const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const {PORT}= require('./config/serverconfig');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');


app.get("/",(req,res)=>{
    res.send("Hello World");
})

const { sequelize } = require('./models');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/auth', authRoutes);
app.use('/books', bookRoutes);

sequelize.sync();


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})