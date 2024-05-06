const express = require('express');
var cors = require('cors');
const app = express();
const mongoose = require('mongoose');

/* CORS */
app.use(cors());

/* ROUTE-MODELS*/
const productRoute = require("./routes/product.route.js");

/* MIDDLEWARE */
app.use(express.json());

/* ROUTES */
app.use("/api/products", productRoute);

/* CONNECTION - MongoDB // -> Agregar desde el mongoose.js... */
mongoose.connect("mongodb+srv://carlospadillaspk:nVp4bQJKE0vjQJVN@backenddb.hja9tn1.mongodb.net/")
    .then(() => {
        console.log("Connected to database!");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch(() => {
        console.log("Connection failed!");
    });