///PRODUCT MANAGER ASYNC

const { AsyncLocalStorage } = require("async_hooks");

class Product {
  constructor(id, title, description, price, thumbnail, code, stock) {
    (this.id = id), (this.title = title);
    (this.description = description),
      (this.price = price),
      (this.thumbnail = thumbnail),
      (this.code = code),
      (this.stock = stock);
  }
}

class ProductManager {
  #products;
  #productsDirPath;
  #productsFilePath;
  #filesystem;
  static id = 0;

  constructor() {
    this.#products = [];
    this.#productsDirPath = "./files/";
    this.#productsFilePath = this.#productsDirPath + "products.JSON";
    this.#filesystem = require("fs");
  }

  //metodos
  // createProduct= async (title,description,price,thumbnail,code,stock){

  // }

  getProducts = async () => {
    let productsFile = await this.#filesystem.promises.readFile(
      this.#productsFilePath,
      "utf-8"
    );
    console.log(productsFile);

    this.#products = JSON.parse(productsFile);
    console.log(this.#products);
  };
}
let productManager = new ProductManager();
productManager.getProducts();
