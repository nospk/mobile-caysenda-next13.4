import API from "@/lib/api";
import { ListDelivery } from "@/types/Delivery";

const getDetail: (id: number) => Promise<{
  fullName: string;
  email: string;
  phone: string;
  province: string;
  district: string;
  ward: string;
  address: string;
  active?: boolean;
}> = async (id) => {
  const result = {
    fullName: "Trần Hoàng",
    email: "nodawd@gmail.com",
    phone: "0902776490",
    province: "202",
    district: "1446",
    ward: "20401",
    address: "dwad1231",
    active: true,
  };
  return result;
};
const getListDelivery: () => Promise<ListDelivery[] | []> = async () => {
  const list = [
    {
      name: "Trần Đăng Huy Hoàng 1",
      phone: "0962773213",
      address:
        "24 Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, TP. Hồ Chí Minh",
      active: false,
      id: 431,
    },
    {
      name: "Trần Đăng Huy Hoàng 2",
      phone: "123321321",
      address:
        "1231 Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, TP. Hồ Chí Minh",
      active: true,
      id: 123,
    },
  ];
  //const list = [] as any;
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
const editAddress: (
  editAddress: {
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
}> = async (editAddress, active) => {
  const result = {
    status: true,
    message: "Sửa địa chỉ giao hàng thành công",
  };
  return result;
};
const removeAddress: (id: number) => Promise<{
  status: boolean;
  message: string;
}> = async (id) => {
  const result = {
    status: true,
    message: "Đã Xóa Địa Chỉ Thành Công",
  };
  return result;
};
const removeListAddress: (list: number[]) => Promise<{
  status: boolean;
  message: string;
}> = async (list) => {
  const result = {
    status: true,
    message: "Đã Xóa Địa Chỉ Thành Công",
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
  removeAddress,
  removeListAddress,
  getDetail,
  editAddress,
};
export default AddressService;
