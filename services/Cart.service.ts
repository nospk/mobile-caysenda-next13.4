import API from "@/lib/api";
import type { Cart } from "@/types/cart";
import type { Fee_Delivery } from "@/types/fee_delivery";

const getCart = async () => {
  const response = {
    user_id: 0,
    note: "",
    categories: [
      {
        name: "ZTC-1",
        slug: "chau-hinh-thu",
        condition: 1000000,
        amount: 55555555,
        bill: 500000,
        id: 222,
        active: true,
        products: [
          {
            id: 31870,
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
            range: null,
            amount: 1,
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
                priceDefault: 40000,
                vip1: 10000,
                vip2: 20000,
                vip3: 30000,
                vip4: 40000,
                selected: true,
                variantId: 123,
              },
              {
                name: "Chậu Hình Cáo",
                id: 72292,
                thumbnail:
                  "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
                sku: "adw",
                price: 40000,
                quantity: 2,
                priceDefault: 40000,
                vip1: 10000,
                vip2: 20000,
                vip3: 30000,
                vip4: 40000,
                selected: false,
                variantId: 123,
              },
            ],
          },
        ],
      },
      {
        name: "ZTC-2",
        slug: "chau-hinh-thu",
        condition: 1000000,
        amount: 55555555,
        bill: 500000,
        id: 223,
        active: true,
        products: [
          {
            id: 3123,
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
            range: 2,
            amount: 1,
            active: true,
            unit: "Cái",
            variants: [
              {
                name: "Chậu Hình Voi",
                id: 31231,
                thumbnail:
                  "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
                sku: "adw",
                price: 40000,
                quantity: 1,
                priceDefault: 40000,
                vip1: 20000,
                vip2: 15000,
                vip3: 10000,
                vip4: 10000,
                selected: false,
                variantId: 123,
              },
              {
                name: "Chậu Hình Cáo",
                id: 312312,
                thumbnail:
                  "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
                sku: "adw",
                price: 40000,
                quantity: 2,
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

  return response;
};

const updateCart = async (
  catId: number,
  productId: number,
  variantId: number,
  quantity: number
) => {
  const response = {
    success: true,
    code: null,
    message: "Cập nhật thành công",
    cartProductList: [
      {
        id: productId,
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
            id: 72291,
            thumbnail:
              "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
            sku: "adw",
            price: 40000,
            quantity: quantity,
            priceDefault: 40000,
            vip1: 10000,
            vip2: 20000,
            vip3: 30000,
            vip4: 40000,
            selected: true,
            variantId: 123,
          },
          {
            name: "Chậu Hình Cáo",
            id: 72292,
            thumbnail:
              "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
            sku: "adw",
            price: 40000,
            quantity: 2,
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
  };
  return { response, catId };
};

const getFeeAndDelivery = async () => {
  const response = {
    amountActive: 8610000,
    categoryQuantity: 2,
    categoryQuantityActive: 1,
    fee: 67199,
    totalQuantity: 1799,
    totalQuantityActive: 1750,
    weight: 11200,
  } as Fee_Delivery;
  return response;
};

const activeVariant = async (
  active: boolean,
  catId: number,
  productId: number,
  variantId: number
) => {
  const response = !active
    ? {
        activeCategory: true,
        activeProduct: null,
        amountCategory: null,
        cartProductList: [
          {
            id: 31870,
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
                id: 72291,
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
              {
                name: "Chậu Hình Cáo",
                id: 72292,
                thumbnail:
                  "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
                sku: "adw",
                price: 40000,
                quantity: 2,
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
        code: null,
        message: "active false",
        success: false,
      }
    : {
        activeCategory: false,
        activeProduct: null,
        amountCategory: null,
        cartProductList: null,
        code: null,
        message: "active false",
        success: false,
      };
  return { response, catId };
};
const activeProduct = async (
  active: boolean,
  catId: number,
  productId: number,
) => {
  const response = !active
    ? {
        activeCategory: true,
        activeProduct: null,
        amountCategory: null,
        cartProductList: [
          {
            id: 31870,
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
                id: 72291,
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
              {
                name: "Chậu Hình Cáo",
                id: 72292,
                thumbnail:
                  "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
                sku: "adw",
                price: 40000,
                quantity: 2,
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
        code: null,
        message: "active false",
        success: false,
      }
    : {
        activeCategory: false,
        activeProduct: null,
        amountCategory: null,
        cartProductList: null,
        code: null,
        message: "active false",
        success: false,
      };
  return { response, catId };
};
const activeCategory = async (
  active: boolean,
  catId: number,
) => {
  const response = !active
    ? {
        activeCategory: true,
        activeProduct: null,
        amountCategory: null,
        cartProductList: null,
        code: null,
        message: "active true",
        success: true,
      }
    : {
        activeCategory: false,
        activeProduct: null,
        amountCategory: null,
        cartProductList: null,
        code: null,
        message: "active false",
        success: false,
      };
  return { response, catId };
};
const activeTotal = async (
  active: boolean,
  catId: number,
) => {
  const response = !active
    ? {
        activeCategory: true,
        activeProduct: null,
        amountCategory: null,
        cartProductList: null,
        code: null,
        message: "active true",
        success: true,
      }
    : {
        activeCategory: false,
        activeProduct: null,
        amountCategory: null,
        cartProductList: null,
        code: null,
        message: "active false",
        success: false,
      };
  return { response, catId };
};
const CartService = {
  getCart,
  updateCart,
  getFeeAndDelivery,
  activeVariant,
  activeProduct,
  activeCategory
};
export default CartService;
