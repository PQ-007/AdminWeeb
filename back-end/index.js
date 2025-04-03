const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// CORS configuration (
app.use(
  cors({
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    origin: "http://localhost:3000", 
    credentials: true,
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});