import React from "react";
import ProductDetails from "../components/ProductDetails";
import { useSelector } from "react-redux";

function Modal() {
  const { productCode, productInfo } = useSelector((state: any) => state.modal);

  return (
    <ProductDetails
      code={productCode}
      name={productInfo.name}
      description={productInfo.description}
      image={productInfo.image}
      price={productInfo.price}
      category={productInfo.category}
      quantity={productInfo.quantity}
      inventoryStatus={productInfo.inventoryStatus}
      rating={productInfo.rating}
    />
  );
}

export default Modal;
