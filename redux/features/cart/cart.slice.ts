import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Cart } from "@/types/cart";


const initialState = {
  user_id: 0,
  categories: [
    {
      name: "ZTC-1",
      slug: "chau-hinh-thu",
      condition: 1000000,
      amount: 55555555,
      bill: 500000,
      products: [
        {
          productId: 123,
          name: "Chậu Hình Thú",
          sku: "ZTC-1",
          slug: "ZTC-1",
          conditionDefault: 2,
          condition1: 2,
          condition2: 5,
          condition3: 10,
          condition4: 11,
          priceDefault: 60000,
          price1: 60000,
          price2: 40000,
          price3: 30000,
          price4: 30000,
          thumbnail:
            "https://caysenda.vn/resources/upload/17892827873_102253868.jpg",
          categoryId: 123,
          retail: true,
          quantity: 10,
          range: 1,
          amount: 1,
          active: true,
          unit: "Cái",
          variants: [
            {
              name: "Chậu Hình Voi",
              thumbnail:
                "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
              sku: "adw",
              price: 40000,
              quantity: 1,
              priceDefault: 40000,
              vip1: 10000,
              vip2: 20000,
              vip3: 30000,
              vip4: 40000,
              selected: true,
              variantId: 123,
            },
          ],
        },
      ],
    },
  ],
} as Cart;

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reset: () => initialState,
    addCart: (state) => {
      state.categories = [
        {
          name: "Chậu Hình Thú",
          slug: "chau-hinh-thu",
          condition: 1000000,
          amount: 55555555,
          bill: 100000,
          products: [
            {
              productId: 123,
              name: "ZTC-1",
              sku: "ZTC-1",
              slug: "ZTC-1",
              conditionDefault: 2,
              condition1: 2,
              condition2: 5,
              condition3: 10,
              condition4: 11,
              priceDefault: 60000,
              price1: 60000,
              price2: 40000,
              price3: 30000,
              price4: 30000,
              thumbnail:
                "https://caysenda.vn/resources/upload/17892827873_102253868.jpg",
              categoryId: 123,
              retail: true,
              quantity: 10,
              range: 1,
              amount: 1,
              active: true,
              unit: "Cái",
              variants: [
                {
                  name: "Chậu Hình Voi",
                  thumbnail:
                    "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
                  sku: "adw",
                  price: 40000,
                  quantity: 1,
                  priceDefault: 40000,
                  vip1: 10000,
                  vip2: 20000,
                  vip3: 30000,
                  vip4: 40000,
                  selected: true,
                  variantId: 123,
                },
              ],
            },
          ],
        },
      ];
    },
  },
});

export const { addCart, reset } = cart.actions;
export default cart.reducer;
