import API from "@/lib/api";
import { ListDelivery } from "@/types/Delivery";
const getCurrentAddress: () => Promise<string> = async () => {
  const address =
    "24 Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, thành phố Hồ Chí Minh";

  return address;
};
const getListDelivery: () => Promise<ListDelivery[]> = async () => {
  const list = [
    {
      name: "Trần Đăng Huy Hoàng 1",
      phone: "0962773213",
      address:
        "24 Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, thành phố Hồ Chí Minh",
      active: true,
      id: 431,
    },
    {
      name: "Trần Đăng Huy Hoàng 2",
      phone: "123321321",
      address:
        "1231 Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, thành phố Hồ Chí Minh",
      active: false,
      id: 123,
    },
  ];
  return list;
};
const setActiveDelivery: (id: number) => Promise<{
  status: boolean;
  message: string;
}> = async (id) => {
  const result = {
    status: true,
    message: "Đổi địa chỉ thành công",
  };
  return result;
};
const AddressService = {
  getCurrentAddress,
  getListDelivery,
  setActiveDelivery,
};
export default AddressService;
