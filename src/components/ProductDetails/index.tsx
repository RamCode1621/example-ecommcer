import React from "react";
import "./index.css";
import CloseModal from "../../assets/close.png";
import StarIcon from "../../assets/star.png";
import { useDispatch, useSelector } from "react-redux";
import { exitModal } from "../../redux/slices/productDetailsSlice";

interface IProductModal {
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

const DetalleProducto = ({
  code,
  name,
  description,
  image,
  price,
  category,
  quantity,
  inventoryStatus,
  rating,
}: IProductModal) => {
  const dispatch = useDispatch();

  const { modalStatus } = useSelector((state: any) => state.modal);

  let styles = "";

  if (modalStatus === true) {
    styles = "watch-modal";
  } else {
    styles = "unwatch-modal";
  }

  return (
    <div className={`modal-content ${styles}`}>
      <div onClick={(e) => dispatch(exitModal())}>
        <img className="close-modal-icon" src={CloseModal} alt="" />
      </div>

      <div className="container">
        <div className="product-container-image">
          <img
            className="product-image"
            src={`https://primefaces.org/cdn/primereact/images/product/${image}`}
            alt={name}
          />
        </div>
        <div className="product-information">
          <p>{category}</p>
          <h1>{name}</h1>
          <h2>$ {price}</h2>
          <p className="desc">{description}</p>
          <p className="size">{quantity}</p>
          <p>{inventoryStatus}</p>
          <div className="rating">
            <strong>Ranting:</strong>
            {Array(rating)
              .fill(0)
              .map((item, index) => (
                <img
                  key={item + index}
                  className="ranting-star-icon"
                  src={StarIcon}
                  alt=""
                />
              ))}
          </div>
          <div className="botones ">
            <button className="btn btn-primary boton">agrgar al carrito</button>
            <button className="btn btn-primary boton">ir al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;
