const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const UploadRoute = require("./routes/UploadRoute");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 5000;

const url =
  "mongodb+srv://Samreen:4524.smr@cluster0.0vamaay.mongodb.net/Gallery?retryWrites=true&w=majority";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


app.use(UploadRoute) ;

app.listen(PORT, () => {
  console.log(`sever started at port : ${PORT}`);
});
