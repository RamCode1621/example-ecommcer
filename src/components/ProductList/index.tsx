import { useEffect, useState } from "react";
import "./index.css";
import { data } from "../../data";
import { IProduct } from "./ProductService";

import useAddToCartService from "../useAddToCartService";
import useModalService from "../../hooks/useModalService";

const ProductCard = () => {
  const [products, setProducts] = useState([] as IProduct[]);
  const [openModalService] = useModalService();
  const [ButtonAddToCart] = useAddToCartService();

  useEffect(() => {
    setProducts(data.slice(0, 12));
  }, []);
  return (
    <>
      {products.map((product) => (
        <div
          key={product.code}
          className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
        >
          <div
            onClick={() => {
              openModalService(product.code);
            }}
            className="card"
          >
            <img
              className="card-img-top"
              src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
              alt={product.name}
            />

            <div className="card-body">
              <p className="card.text">{product.name}</p>
              <p className="card-text">$ {product.price}</p>
            </div>
            <div className="card-footer">
              <ButtonAddToCart code={product.code} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const ProductList = () => {
  return (
    <div className="col-12 p-5 row">
      <ProductCard />
    </div>
  );
};

export default ProductList;
