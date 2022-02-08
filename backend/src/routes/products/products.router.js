const { Router } = require("express");
const { adminValidate } = require("../../middlewares/adminValidate");
const { emailValidate } = require("../../middlewares/emailValidate");
const { tokenValidate } = require("../../middlewares/tokenValidate");
const {
  tokenValidateForGet,
} = require("../../middlewares/tokenValidateForGet");
const deleteProduct = require("./deleteController/deleteProduct.controller");
const getDetailProduct = require("./getController/getDetailProduct.controller");
const getDetailProductAdmin = require("./getController/getDetailProductAdmin.controller");
const getProducts = require("./getController/getProducts.controller");
const getProductsAdmin = require("./getController/getProductsAdmin.controller");
const createProduct = require("./postController/createProduct.controller");
const updateProduct = require("./putController/updateProduct.controller");
const products = Router();

const middlewares = [tokenValidate, emailValidate, adminValidate];
const middlewaresForGet = [tokenValidateForGet, emailValidate, adminValidate];

products.route("/admin").get(middlewaresForGet, getProductsAdmin);
products.route("/admin").post(middlewares, createProduct);
products.route("/admin").delete(middlewares, deleteProduct);
products.route("/admin").put(middlewares, updateProduct);
products.route("/admin/:id").get(middlewaresForGet, getDetailProductAdmin);
products.route("/detail/:id").get(getDetailProduct);
products.route("/").get(getProducts);

module.exports = products;
