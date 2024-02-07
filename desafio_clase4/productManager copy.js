class ProductManager {
  constructor() {
    this.products = [];
  }

  static id = 0; //

  addProduct(title, description, price, thumbnail, code, stock) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].code === code) {
        console.log(`El codigo ${code} se repite`);
        return;
      }
    }
    let newProduct = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    if (!Object.values(newProduct).includes(undefined)) {
      ProductManager.id++;
      this.products.push({
        ...newProduct,
        id: ProductManager.id,
      });
    } else {
      console.log("Todos los campos son obligatorios");
    }
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    if (this.products.find((product) => product.id === id)) {
      console.log(this.products.find((product) => product.id === id));
    } else {
      console.log("Not found");
    }
  }

  deleteProductById(id) {
    if (this.products.find((product) => product.id === id)) {
      let product = this.products.find((i) => i.id === id);

      let indexProduct = this.products.indexOf(product, 0);
      this.products.splice(indexProduct, 1);
      console.log("El producto fue eliminado.");
      console.log(this.products);
    } else {
      console.log("Not found");
    }
  }
}

let newProductManager = new ProductManager();

console.log(newProductManager.getProducts()); ///"[]"

newProductManager.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc12",
  25
);

newProductManager.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc12",
  25
);

newProductManager.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc13",
  25
);

// console.log(newProductManager.getProducts());

// newProductManager.getProductById(1);

// newProductManager.getProductById(5);

console.log(newProductManager.getProducts());

newProductManager.deleteProductById(2);
