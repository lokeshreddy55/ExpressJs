const express = require("express");
const JsonBooksdata = require("./Jsondata").books;
const { gett, postt, putt, deletee, router } = require('./Allrequestslogger'); //middlewares

const PORT = 3500;

const app = express();
app.use(express.json());              //Imp - for getting data(post) in json format

//----------------- Using middleware router -----------------//

//app.use(router);
app.use("/api",router);

//------------ Handling invalid requests & errors -----------//

app.use((err,req,res,next)=>{
    if(err) {
        res.status(404).send("No resource found");
    }
});

//------------------- Using middlewares -------------------//

// app.get("/get", gett, (req, res) => {
//     // res.send(JsonBooksdata);
//     console.log("get");
// });

// app.post("/post", postt, (req, res) => {
//     console.log("post");
// });

// app.put("/update/:isbn", putt, (req, res) => {
//     console.log("put");
// });

// app.delete("/delete/:isbn", deletee, (req, res) => {
//     console.log("delete");
// });

app.listen((PORT), () => {
    console.log("server running");
});