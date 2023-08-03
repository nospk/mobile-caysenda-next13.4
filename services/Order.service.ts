import { OrderType } from "@/types/order";

let listOrder: OrderType[] = [
  {
    OrderId: "1",
    Product: "1",
    status: "new",
    category: [],
  },
  {
    OrderId: "1",
    Product: "1",
    status: "addition",
    category: [],
  },
  {
    OrderId: "1",
    Product: "1",
    status: "shipping",
    category: [],
  },
  {
    OrderId: "1",
    Product: "1",
    status: "complete",
    category: [],
  },
  {
    OrderId: "1",
    Product: "1",
    status: "shipping",
    category: [],
  },
];

// Create a function to get orders
const getOrder = async (status: any = undefined) => {
  if (status === undefined) {
    return listOrder as OrderType[];
  } else {
    return listOrder.filter((order) => order.status === status) as OrderType[];
  }
};

// Create a function to delete orders
const delOrder = async (orderId: string) => {
  listOrder = listOrder.filter((order) => order.OrderId !== orderId);
};

// Create a function to update orders
const updateOrder = async (order: OrderType) => {
  const index = listOrder.findIndex((o) => o.OrderId === order.OrderId);
  listOrder[index] = order;
};

// Export the functions
export { getOrder, delOrder, updateOrder };
