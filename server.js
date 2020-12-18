import express from "express";
import mongoose from "mongoose";
// import cors from "cors";
import Account from "./dbAccount.js";

// App config
const app = express();
const port = process.env.PORT || 9000;

const connection_url =
  "mongodb+srv://admin:admin@cluster0.qyvfl.mongodb.net/tiktokdb?retryWrites=true&w=majority";

// middleware
app.use(express.json());
// app.use(cors);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next();
});

// Db config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//Api endpoint
app.get("/", (req, res) => res.status(201).send("Welcome to tiktok waseeyon!"));

app.post("/tiktok/create", (req, res) => {
  const dbData = req.body;

  Account.create(dbData, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/tiktok/create", (req, res) => {
  Account.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// listener
app.listen(port, () => {
  console.log(`runnig on server ${port}`);
});
