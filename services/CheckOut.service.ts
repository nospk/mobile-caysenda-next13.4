import { CheckOut } from "@/types/Checkout";
const getCheckOut = async () => {
  const response = {
    categories: [
      {
        name: "Chậu Gốm Sứ Chậu Sứ",
        id: "123",
        products: [
          {
            name: "ZTC1 ZTC1 ZTC1 ZTC1 ZTC1 ZTC1 ZTC1 ZTC1 ZTC1 ZTC1",
            image:
              "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
            id: "321",
            quantity: 4,
            variants: [
              {
                name: "Chậu hình voi",
                id: "1236",
                price: 16000,
                quantity: 2,
                weight: 1000,
              },
              {
                name: "Chậu hình voi",
                id: "12367",
                price: 16000,
                quantity: 2,
                weight: 1000,
              },
            ],
          },
          {
            name: "ZTC2",
            image:
              "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
            id: "3421",
            quantity: 2,
            variants: [
              {
                name: "Chậu hình voi",
                id: "12136",
                price: 18000,
                quantity: 2,
                weight: 1000,
              },
            ],
          },
        ],
      },
      {
        name: "Chậu Gốm Sứ Chậu Sứ 2",
        id: "1323",
        products: [
          {
            name: "ZTC1",
            image:
              "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
            id: "3521",
            quantity: 4,
            variants: [
              {
                name: "Chậu hình voi",
                id: "12575436",
                price: 16000,
                quantity: 2,
                weight: 1000,
              },
              {
                name: "Chậu hình voi",
                id: "12367",
                price: 16000,
                quantity: 2,
                weight: 1000,
              },
            ],
          },
          {
            name: "ZTC2",
            image:
              "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
            id: "3477521",
            quantity: 5,
            variants: [
              {
                name: "Chậu hình voi",
                id: "12145436",
                price: 18000,
                quantity: 3,
                weight: 1000,
              },
              {
                name: "Chậu hình voi",
                id: "121457436",
                price: 18000,
                quantity: 2,
                weight: 1000,
              },
            ],
          },
        ],
      },
    ],
    totalQuantity: 1,
    totalWeight: 1430,
    variantActive: 1,
    amount: 16000,
    fee: 30000,
  } as CheckOut;
  return response;
};
const submitCheckOut = async (note: string) => {
  const response = {
    success: true,
    message: "Đơn hàng thành công",
  };
  return response
};
const CheckOutService = {
  getCheckOut,
  submitCheckOut,
};
export default CheckOutService;
