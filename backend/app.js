const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");
const { readdirSync } = require("fs");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

//middlewares
app.use(express.json());
/*app.use(cors({
  origin: "https://finance-tracker-mern-449s.vercel.app"
}));*/

// Configure CORS
app.use(cors({
  origin: "*", // Update this to the origin(s) you want to allow
  methods: ["GET", "POST", "PUT", "DELETE"], // Add the HTTP methods you want to allow
  allowedHeaders: ["Content-Type", "Authorization"], // Add the headers you want to allow
}));

//routes
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require("./routes/" + route))
);

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("listening to port:", PORT);
  });
};

server();
