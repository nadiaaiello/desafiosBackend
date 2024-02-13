import express from "express";
import ProductManager from "./ProductManager.cjs";

let productManager = new ProductManager();

const app = express();
const PORT = 8080;

app.get("/products", async (req, res) => {
  try {
    const limit = req.query.limit;
    const products = await productManager.getProducts();

    if (limit) {
      res.json(products.slice(0, parseInt(limit)));
    } else {
      res.json(products);
    }
  } catch (error) {
    console.error("Error al obtener productos:", error.message);
    res.status(500).send("Error interno del servidor");
  }
});

app.get("/products/:pid", async (req, res) => {
  try {
    let { pid } = req.params;
    console.log(pid);

    const product = await productManager.getProductById(pid);
    if (product) {
      res.json({ product });
    } else {
      res.send({ msg: "Producto no encontrado" });
    }
  } catch (error) {
    console.error("Error al obtener productos:", error.message);
    res.status(500).send("Error interno del servidor");
  }
});

app.listen(PORT, () => {
  console.log(`Server run on port: ${PORT}`);
});
