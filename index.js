const express = require("express");
const app = express();
const userRoute = require("./routes/userRoute");

app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.listen(7000, () => {
  console.log("Server running at port 7000");
});
