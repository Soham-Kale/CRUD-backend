import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 3000;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(()=> {
    console.log("DB connect successfully!!!");

    app.listen(PORT, () => {
        console.log(`server running at port: ${PORT}`);
    })

}).catch((err) => console.log(err))

app.use("/api", route)