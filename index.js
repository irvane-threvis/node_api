const express = require("express")
const app = express()
const mongoose = require("mongoose")
const productRoute = require("./routes/product.route.js")
const product = require("./models/product.model.js")


app.use(express.json());
app.use(express.urlencoded({extend:false}));
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
    res.send("welcome in my learning serve........");

})






mongoose.connect("mongodb+srv://viscott:viscott@mongod.lpopjyp.mongodb.net/node_api?appName=mongod")
    .then(() => {
        console.log("database is connected.....")
        app.listen(3000, () => {
            console.log("sever is running on port 3000.....")
        })
    })
    .catch((error) => {
        console.log("connecxion failed.....")
    })
