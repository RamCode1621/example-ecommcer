import { createSlice } from "@reduxjs/toolkit";

export interface IItemProduct {
  id: string;
  code: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    countProducts: 0,
    cart: [
      // {
      //   id: "1000",
      //   code: "f230fh0g3",
      //   name: "Bamboo Watch",
      //   description: "Product Description",
      //   image: "bamboo-watch.jpg",
      //   price: 65,
      //   category: "Accessories",
      //   quantity: 24,
      //   inventoryStatus: "INSTOCK",
      //   rating: 5,
      // },
      {
        id: "1001",
        code: "nvklal433",
        name: "Black Watch",
        description: "Product Description",
        image: "black-watch.jpg",
        price: 72,
        category: "Accessories",
        quantity: 61,
        inventoryStatus: "INSTOCK",
        rating: 4,
      },
      {
        id: "1002",
        code: "zz21cz3c1",
        name: "Blue Band",
        description: "Product Description",
        image: "blue-band.jpg",
        price: 79,
        category: "Fitness",
        quantity: 2,
        inventoryStatus: "LOWSTOCK",
        rating: 3,
      },
      {
        id: "1003",
        code: "244wgerg2",
        name: "Blue T-Shirt",
        description: "Product Description",
        image: "blue-t-shirt.jpg",
        price: 29,
        category: "Clothing",
        quantity: 25,
        inventoryStatus: "INSTOCK",
        rating: 5,
      },
    ] as IItemProduct[],
  },
  reducers: {
    incrementCountProducts: (state) => {
      state.countProducts += 1;
    },
  },
});

export const { incrementCountProducts } = cartSlice.actions;

export default cartSlice.reducer;
