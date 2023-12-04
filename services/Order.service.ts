import { OrderType } from "@/types/order";

let listOrder = [
  {
    id: 123456132,
    status: "new",
    order_amount: 100000000,
    ship: 500000,
    full_address: "24 Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, TP. Hồ Chí Minh",
    address: "24 Nguyễn Thị Minh Khai",
    dictrict: "1453",
    province: "202",
    ward: "21112",
    order_detail: [
      {
        product_id: 123,
        product_name: "Chậu Hình Thú",
        variant_name: "Chậu Hình Voi",
        thumbnail: "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
        price: 10000,
        quantity: 1,
        variant_id: 1323,
      },
    ],
  },
  {
    id: 123456132,
    status: "new",
    order_amount: 100000000,
    ship: 500000,
    full_address: "24 Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, TP. Hồ Chí Minh",
    address: "24 Nguyễn Thị Minh Khai",
    dictrict: "1453",
    province: "202",
    ward: "21112",
    order_detail: [
      {
        product_id: 123,
        product_name: "Chậu Hình Thú",
        variant_name: "Chậu Hình Voi",
        thumbnail: "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
        price: 10000,
        quantity: 1,
        variantId: 1323,
      },
      {
        product_id: 123,
        product_name: "Chậu Hình Thú",
        variant_name: "Chậu Hình Voi",
        thumbnail: "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
        price: 10000,
        quantity: 1,
        variantId: 1323,
      },
    ],
  },
  {
    id: 123456133,
    status: "complete",
    order_amount: 120000,
    ship: 500000,
    full_address: "24 Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, TP. Hồ Chí Minh",
    address: "24 Nguyễn Thị Minh Khai",
    dictrict: "1453",
    province: "202",
    ward: "21112",
    order_detail: [
      {
        product_id: 123,
        product_name: "Chậu Hình Thú",
        variant_name: "Chậu Hình Voi",
        thumbnail: "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
        price: 10000,
        quantity: 1,
        variantId: 1323,
      },
      {
        product_id: 123,
        product_name: "Chậu Hình Thú",
        variant_name: "Chậu Hình Voi",
        thumbnail: "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
        price: 10000,
        quantity: 1,
        variantId: 1323,
      },
    ],
  },
  {
    id: 123456133,
    status: "addition",
    order_amount: 120000,
    ship: 500000,
    full_address: "24 Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, TP. Hồ Chí Minh",
    address: "24 Nguyễn Thị Minh Khai",
    dictrict: "1453",
    province: "202",
    ward: "21112",
    order_detail: [
      {
        product_id: 123,
        product_name: "Chậu Hình Thú",
        variant_name: "Chậu Hình Voi",
        thumbnail: "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
        price: 10000,
        quantity: 1,
        variantId: 1323,
      },
      {
        product_id: 123,
        product_name: "Chậu Hình Thú",
        variant_name: "Chậu Hình Voi",
        thumbnail: "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
        price: 10000,
        quantity: 1,
        variantId: 1323,
      },
    ],
  },
  {
    id: 123456133,
    status: "shipping",
    order_amount: 120000,
    ship: 500000,
    full_address: "24 Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, TP. Hồ Chí Minh",
    address: "24 Nguyễn Thị Minh Khai",
    dictrict: "1453",
    province: "202",
    ward: "21112",
    order_detail: [
      {
        product_id: 123,
        product_name: "Chậu Hình Thú",
        variant_name: "Chậu Hình Voi",
        thumbnail: "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
        price: 10000,
        quantity: 1,
        variantId: 1323,
      },
      {
        product_id: 123,
        product_name: "Chậu Hình Thú",
        variant_name: "Chậu Hình Voi",
        thumbnail: "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
        price: 10000,
        quantity: 1,
        variantId: 1323,
      },
    ],
  },
];

// Create a function to get orders
const getOrder = async (status: string) => {
  if (status === "all") {
    return listOrder;
  } else {
    return listOrder.filter((order) => order.status === status);
  }
};

// // // Create a function to delete orders
// const delOrder = async (orderId: string) => {
//   listOrder = listOrder.filter((order) => order.orderId !== orderId);
// };
const cancelOrder = async (id: number) => {
  const response = {
    success: true,
    message: "Hủy đơn hàng thành công",
  };

  return response;
};
const changeAddressOrder = async (order_id: number, address_id: number) => {
  const response = {
    success: true,
    message: "Thay đổi địa chỉ đon hàng thành công",
  };

  return response;
};
// Export the functions
const OrderService = { getOrder, cancelOrder, changeAddressOrder };
export default OrderService;
