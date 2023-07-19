import API from "@/lib/api";
import type { Cart } from "@/types/cart";
import type { Fee_Delivery } from "@/types/fee_delivery";

const getCart = async () => {
  const response = {
    note: "",
    bill: 119000,
    categories: [
      {
        name: "ZTC-1",
        slug: "chau-hinh-thu",
        condition: 1000000,
        amount: 39000,
        categoryId: 321,
        active: true,
        products: [
          {
            productId: 123,
            name: "Chậu Hình Thú",
            sku: "ZTC-1",
            slug: "ZTC-1",
            conditionDefault: 6,
            condition1: 6,
            condition2: 50,
            condition3: 100,
            condition4: 1000,
            price1: 33000,
            price2: 25000,
            price3: 21000,
            price4: 19000,
            thumbnail:
              "https://caysenda.vn/resources/upload/17892827873_102253868.jpg",
            retail: false,
            quantity: 3,
            active: true,
            unit: "Cái",
            variants: [
              {
                name: "Chậu Hình Voi",
                id: 72291,
                thumbnail:
                  "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
                sku: "adw",
                price: 40000,
                quantity: 1,
                vip1: 39000,
                vip2: 37000,
                vip3: 33000,
                vip4: 29000,
                selected: true,
                variantId: 1323,
              },
              {
                name: "Chậu Hình Cáo",
                id: 72292,
                thumbnail:
                  "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
                sku: "adw",
                price: 40000,
                quantity: 2,
                vip1: 33000,
                vip2: 21000,
                vip3: 19000,
                vip4: 17000,
                selected: false,
                variantId: 1236,
              },
            ],
          },
        ],
      },
      {
        name: "ZTC-2 Retail",
        slug: "chau-hinh-thu",
        condition: 1000000,
        amount: 80000,
        categoryId: 1564,
        active: true,
        products: [
          {
            productId: 123,
            name: "Chậu Hình Thú",
            sku: "ZTC-1",
            slug: "ZTC-1",
            conditionDefault: 1,
            condition1: null,
            condition2: null,
            condition3: null,
            condition4: null,
            price1: 60000,
            price2: 40000,
            price3: 30000,
            price4: 30000,
            thumbnail:
              "https://caysenda.vn/resources/upload/17892827873_102253868.jpg",
            retail: true,
            quantity: 4,
            active: true,
            unit: "Cái",
            variants: [
              {
                name: "Chậu Hình Voi",
                id: 31231,
                thumbnail:
                  "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
                sku: "adw",
                price: 35000,
                quantity: 2,
                vip1: 30000,
                vip2: 25000,
                vip3: 15000,
                vip4: 10000,
                selected: false,
                variantId: 1234,
              },
              {
                name: "Chậu Hình Cáo",
                thumbnail:
                  "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
                sku: "adw",
                price: 40000,
                quantity: 2,
                vip1: 40000,
                vip2: 30000,
                vip3: 20000,
                vip4: 10000,
                selected: true,
                variantId: 1235,
              },
            ],
          },
        ],
      },
    ],
  } as Cart;

  return response;
};

const updateCart = async (
  categoryId: number,
  productId: number,
  variantId: number,
  quantity: number
) => {
  const response = {
    success: true,
    message: "Cập nhật thành công",
  };
  return response;
};

const activeVariant = async (
  active: boolean,
  catId: number,
  productId: number,
  variantId: number
) => {
  const response = {
    success: true,
    active: active,
    message: "Cập nhật thành công",
  };

  return response;
};
const activeProduct = async (
  active: boolean,
  catId: number,
  productId: number
) => {
  const response = {
    success: true,
    active: active,
    message: "Cập nhật thành công",
  };

  return response;
};
const activeCategory = async (active: boolean, catId: number) => {
  const response = {
    success: true,
    active: active,
    message: "Cập nhật thành công",
  };
  return response;
};
const activeTotal = async (active: boolean, catId: number) => {
  const response = {
    success: true,
    active: active,
    message: "Cập nhật thành công",
  };
  return { response, catId };
};
const CartService = {
  getCart,
  updateCart,
  activeVariant,
  activeProduct,
  activeCategory,
};
export default CartService;
