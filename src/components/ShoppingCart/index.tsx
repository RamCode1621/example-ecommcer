import React from "react";
import { useSelector } from "react-redux";
import "./index.css";
import RemoveIcon from "../../assets/remove.png";

const ShoppingCart = ({
  item,
}: {
  item: {
    image: string;
    name: string;
    category: string;
    price: number;
  };
}) => {
  return (
    <div className="contenedor">
      <div className="remove-ico">
        <img className="remove-icon" src={RemoveIcon} />
      </div>
      <div className="contImg">
        <img
          className="imagen"
          src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`}
        />
      </div>

      <div className="contDesc">
        <h3>{item.name}</h3>
        <p className="par">{item.category}</p>
        <p className="par">$ {item.price}</p>
      </div>
    </div>
  );
};

const Carrito = ({}) => {
  const { cart } = useSelector((state: any) => state.shoppingCart);

  return (
    <div>
      {cart.map((item: any) => (
        <ShoppingCart key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Carrito;
