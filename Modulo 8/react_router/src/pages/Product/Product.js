import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import { Link } from "react-router-dom";

const Product = () => {
  // 4 - Rota Dinâmica
  const { id } = useParams();

  // 5 - Carregamento dados individual
  const url = "http://localhost:3000/products/" + id;

  const { data: product, loading, error } = useFetch(url);

  return (
    <>
      <p>Product {id}</p>
      {error && <p>{error}</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R$ {product.price}</p>
          {/* 6 - Nested Routes */}
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
      )}
    </>
  );
};

export default Product;
