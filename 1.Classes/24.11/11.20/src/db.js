import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/nodejs", {
  // useNewUrlParser:true,
});

const db = mongoose.connection;
const handleError = (error) => console.log("DB Error", error);
const handleOpen = () => console.log("✅connected to MongoDB");

db.on("error", handleError);
db.once("open", handleOpen);
