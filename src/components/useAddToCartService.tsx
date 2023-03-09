import React from "react";
import { useDispatch } from "react-redux";
import { incrementCountProducts } from "../redux/slices/cartSlice";

const useAddToCartService = () => {
  const dispatch = useDispatch();

  const ButtonAddToCart = ({ code }: { code: string }) => {
    return (
      <button
        onClick={() => {
          // dispatch(incrementCountProducts());
        }}
        className="btn btn-primary"
      >
        Agregar al carrito
      </button>
    );
  };

  return [ButtonAddToCart];
};

export default useAddToCartService;
