const express = require("express");
const db = require("./db/db");
const morgan = require("morgan");
const Products = require("./model/productModel");
const Arrivals = require("./model/arrivalsModel");
const Trending = require("./model/trendingModel");
const User = require("./model/usersModel");
const UserData = require("./model/usersdataModel");
const Order = require("./model/orderModel");
const Reviews = require("./model/reviewModel");
const Categories = require("./model/categoriesModel");
const cors = require("cors");
const app = express();
const port = 7000;

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));//for forms submission

const handleCRUD = async (req, res, model) => {
  const method = req.method;
  console.log(method);
  const id = req.params.id;
  const body = req.body;
    switch (method) {
        case "GET":
          console.log("get", req.params.id);
          const data = id ? await Products.find({ _id: id }) : await model.find();
          res.json(data);
          break;
        case "POST":
            console.log(body);
          const newProduct = new model(body);
          newProduct
            .save()
            .then(() => console.log("New product added successfully"))
            .catch((err) => {
              if (err) throw err;
            });
          res.json("added" + newProduct);
          break;
        case "PUT":
            await model.findOneAndUpdate({ _id: id }, body);
            res.json("updated");
          break;
        case "PATCH":
            await model.findOneAndUpdate({ _id: id }, body);
            res.json("updated");
          break;
        case "DELETE":
            console.log("delete");
            await model.deleteOne({ _id: id });
            console.log("deleted");

            res.json("deleted");
            break;
        default:
          break;
    }

  
};

//routes
app.route("/products/:id?").all(async (res, req) => handleCRUD(res, req, Products));
app.route("/arrivals/:id?").all(async (res, req) => handleCRUD(res, req, Arrivals));
app.route("/trending/:id?").all(async (res, req) => handleCRUD(res, req, Trending));
app.route("/users/:id?").all(async (res, req) => handleCRUD(res, req, User));
app.route("/users_data/:id?").all(async (res, req) => handleCRUD(res, req, UserData));
app.route("/orders/:id?").all(async (res, req) => handleCRUD(res, req, Order));
app.route("/reviews/:id?").all(async (res, req) => handleCRUD(res, req, Reviews));
app.route("/categories/:id?").all(async (res, req) => handleCRUD(res, req, Categories));

app.listen(port, () => {
  console.log("====================================");
  console.log("port is listening on " + port);
  console.log("====================================");
});
