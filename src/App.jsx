import "./App.css";
import axios from "axios";
import ProductsTable from "./components/Product";
import CreateProductDrawer from "./components/CreateProductDrawer";
import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";

function App() {
  const [products, setProducts] = useState([]);
  const toast = useToast();

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = (product) => {
    axios.delete(`/api/products/${product.id}`).then(() => {
      fetchProducts();
    });
  };

  const fetchProducts = () => {
    axios
      .get("/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        setProducts([]);
        toast({
          title: "Error!",
          description: "There was a problem fetching the products",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  const create = (newProduct) => {
    const product = {
      ...newProduct,
      price: parseFloat(newProduct.price),
      quantity: parseInt(newProduct.quantity),
    };

    axios
      .post("/api/products", product)
      .then(() => {
        fetchProducts();
        toast({
          title: "Product created!",
          description: "Your product was saved.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: "Error!",
          description: `${error.response.data.error}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return (
    <>
      {
        products.length > 0 ?
            <ProductsTable products={products} deleteProduct={deleteProduct} />
            :
            <h1 style={{margin: "120px auto", textAlign: "center"}}>There are no products available</h1>
      }

      <CreateProductDrawer create={create} />
    </>
  );
}

export default App;
