import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";

// initialize configuration
dotenv.config();

const app = express();

// Enable all cors requests
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port: number = parseInt(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
