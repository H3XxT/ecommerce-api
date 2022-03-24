const Product = require("../models/product.js");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const createProduct = async (req, res) => {
  res.send("create product");
};

const getAllProduct = async (req, res) => {
  res.send("get All product");
};

const getOneProduct = async (req, res) => {
  res.send("get One product");
};

const updateProduct = async (req, res) => {
  res.send("update product");
};

const deleteProduct = async (req, res) => {
  res.send("delete product");
};

const uploadImage = async (req, res) => {
  res.send("upload product");
};

module.exports = {
  createProduct,
  getAllProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
  uploadImage
};
