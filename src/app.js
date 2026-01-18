#!/usr/bin/env node

const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
        <form action="/echo_user_input" method="POST">
            <input name="user_input" type="text" placeholder="Enter what you want to echo" required />
            <button type="submit">Submit!</button>
        </form>
    `);
});

app.post("/echo_user_input", (req, res) => {
  const userInput = req.body.user_input;
  res.send(`
        <h1>You entered:</h1>
        <p>${userInput}</p>
        <a href="/">Go back</a>
    `);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}/`);
});
