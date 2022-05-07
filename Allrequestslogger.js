const JsonBooksdata = require("./Jsondata").books;
const express = require("express");
const router = express.Router();

const gett = (req, res) => {
    console.log("get");
    res.send(JsonBooksdata);
}

const postt = (req, res) => {
    const data = req.body;
    console.log("post");
    JsonBooksdata.push(data);
    res.send("Successfully Saved some data");
}

const putt = (req, res) => {
    const isbn = req.params.isbn;
    //console.log(isbn);
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
}

const deletee = (req, res) => {
    const isbn = req.params.isbn;
    console.log(isbn);
    const position = JsonBooksdata.findIndex((book) => book.isbn === isbn);
    if (position != -1) {
        JsonBooksdata.splice(position, 1);
        res.statusCode = 200;
        res.send({ message: "Successfully Deleted some data" });
    } else {
        res.statusCode = 404;
        res.send({ message: "Unable to find the book" });
    }
}

const something = () => {
    throw Error("No valid resource found");
}

router.use("/get", gett);
router.use("/post", postt);
router.use("/put/:isbn", putt);
router.use("/delete/:isbn", deletee);
router.use("/*", something);

module.exports = {
    router: router,
}