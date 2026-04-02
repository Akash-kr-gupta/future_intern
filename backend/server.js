require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const leadRoutes = require("./routes/leadRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/minicrm")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api", leadRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server Running on port ${PORT}`));