const express = require('express');
const app = express();
const cors = require('cors');

const pool = require("./db")

//middlewavre
app.use(cors());
app.use(express.json());

//ROUTES

//create todo
app.post("/todos", async (req, res) => {

})

//get all todos
//get a todos
//update a todo
//delete a todo

app.listen(5000, () => {
  console.log("server has started on port 5000");
});