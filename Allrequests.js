const express = require("express");
const JsonBooksdata = require("./Jsondata").books;

const PORT = 3500;

const app = express();
app.use(express.json());              //Imp - for getting data(post) in json format

app.get("/get",(req,res) => {
    res.send(JsonBooksdata);
});

app.post("/post",(req,res) => {
    const data = req.body;
    console.log(data);
    JsonBooksdata.push(data);
    console.log("Inside post");
    res.send("Successfully Saved some data");
});

app.put("/update/:isbn", (req, res) => {
    const isbn = req.params.isbn;
    console.log(isbn);
    const data = req.body;
    const position = JsonBooksdata.findIndex((book) => book.isbn === isbn);
    console.log(position);
    if (position != -1) {
      JsonBooksdata[position] = data;
      res.statusCode = 200;
      res.send({ message: "Successfully Updated some data" });
    } else {
      res.statusCode = 404;
      res.send({ message: "Unable to find the book" });
    }
  });

  app.delete("/delete/:isbn", (req, res) => {
    const isbn = req.params.isbn;
    const position = JsonBooksdata.findIndex((book) => book.isbn === isbn);
    if (position != -1) {
      JsonBooksdata.splice(position, 1);
      res.statusCode = 200;
      res.send({ message: "Successfully Deleted some data" });
    } else {
      res.statusCode = 404;
      res.send({ message: "Unable to find the book" });
    }
  });
  
app.listen((PORT),() => {
  console.log("server running");
});