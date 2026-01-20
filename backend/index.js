require("dotenv").config();
const express = require ('express');
const { connectiondb } = require('./connection');
const userRouter = require('./routes/user');
const expenseRouter = require('./routes/expense');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { authmiddleware } = require('./middlewares/auth');
const app = express();
const PORT = 3069;

// Connect to the database
connectiondb(process.env.MONGO_DB_URL)
.then(()=>{
    console.log("Database connected successfully");
})
.catch((err)=>{
    console.error("Database connection failed:", err);
});

app.use(
  cors({
    origin: ['http://localhost:5173', 'https://payload-hackathon.vercel.app','http://localhost:5174'], // replace with your frontend origin (scheme+host+port)
    credentials: true,               // allow Access-Control-Allow-Credentials
  })
);
app.use(cookieParser());

//Routes
app.use(express.json());
app.use('/user', userRouter);
app.use("/expense",authmiddleware,expenseRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});