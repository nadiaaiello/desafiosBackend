class ProductManager {
  constructor() {
    this.products = [];
  }

  static id = 0;

  addProduct(title, description, price, thumbnail, code, stock) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].code === code) {
        console.log(`El codigo ${code} se repite`);
        break;
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
console.log(newProductManager.getProducts());

newProductManager.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc12",
  25
);

newProductManager.getProductById(1);

newProductManager.getProductById(3);
