import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data";

interface IProductDetails {
  productCode: string;
  modalStatus: boolean;
  productInfo: {
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number;
  };
}
const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {
    productCode: "",
    modalStatus: false,
    productInfo: {},
  } as IProductDetails,
  reducers: {
    openModal: (
      state,
      payload: {
        payload: {
          productCode: string;
        };
      }
    ) => {
      const { productCode } = payload.payload;
      data.find((item) => {
        if (item.code === productCode) {
          state.productInfo = {
            name: item.name,
            price: item.price,
            description: item.description,
            image: item.image,
            category: item.category,
            quantity: item.quantity,
            inventoryStatus: item.inventoryStatus,
            rating: item.rating,
          };
          state.modalStatus = true;
        }
      });
    },
    exitModal: (state) => {
      console.log("exitModal executed");
      state.modalStatus = false;
    },
  },
});

export const { openModal, exitModal } = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
