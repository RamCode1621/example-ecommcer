import { useState } from "react";
import { useDispatch } from "react-redux";
import { openModal, exitModal } from "../redux/slices/productDetailsSlice";

const useModalService = () => {
  const dispatch = useDispatch();

  const openModalService = (code: string) => {
    console.log("openModalService executed");
    dispatch(openModal({ productCode: code }));
  };

  return [openModalService];
};

export default useModalService;
