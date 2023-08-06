import API from "@/lib/api";
import { ListDelivery } from "@/types/Delivery";

const getListDelivery: () => Promise<ListDelivery[]> = async () => {
  const list = [
    {
      name: "Trần Đăng Huy Hoàng 1",
      phone: "0962773213",
      address:
        "24 Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, thành phố Hồ Chí Minh",
      active: false,
      id: 431,
    },
    {
      name: "Trần Đăng Huy Hoàng 2",
      phone: "123321321",
      address:
        "1231 Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, thành phố Hồ Chí Minh",
      active: true,
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
const getCityData = async () => {
  let res = await API.GET({
    path: "/ajax/address",
  });
  return res;
};
const getDistrictData = async (id: string) => {
  let res = await API.GET({
    path: "/ajax/address",
    data: { province: id },
  });
  return res;
};
const getWardData = async (id: string) => {
  let res = await API.GET({
    path: "/ajax/address",
    data: { dictrict: id },
  });
  return res;
};

const createNewAddress: (
  newAddress: {
    fullName: string;
    email: string;
    phone: string;
    province: string;
    district: string;
    ward: string;
    address: string;
  },
  active: boolean
) => Promise<{
  status: boolean;
  message: string;
}> = async (newAddress, active) => {
  const result = {
    status: true,
    message: "Thêm địa chỉ giao hàng mới thành công",
  };
  return result;
};
const AddressService = {
  getListDelivery,
  setActiveDelivery,
  getCityData,
  getDistrictData,
  getWardData,
  createNewAddress,
};
export default AddressService;
