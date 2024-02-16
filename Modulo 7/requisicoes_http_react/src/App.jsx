import "./App.css";

import { useState, useEffect } from "react";

// 4 - Custom Hook
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  // 4 - Custom Hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - Resgatando dados
  /*useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);

      const data = await response.json();

      setProducts(data);
    }

    fetchData();
  }, []);*/

  // 2 - Add de Produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    /*const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product),
    });

    // 3 - Carregamento dinâmico
    const addedProduct = await res.json();

    setProducts((prevProducts) => [...prevProducts, addedProduct]);*/

    // 5 - Refatorando POST
    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  return (
    <>
      <h1>Lista de Produtos</h1>
      {/* 6 - Loading */}
      {loading && <p>Carregando os dados...</p>}
      {!error && (
        <ul>
          {items?.map((product) => (
            <li key={product.id}>
              {product.name} - R$: {product.price}
            </li>
          ))}
        </ul>
      )}
      {error && <p>{error}</p>}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/*7 - State de Loading no POST*/}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Enviar" />}
        </form>
      </div>
    </>
  );
}

export default App;
