import API from "@/lib/api";


const getCurrentAddress = async () => {
  const address = "24 Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, thành phố Hồ Chí Minh";

  return address;
};


const AddressService = {
	getCurrentAddress
}
export default AddressService