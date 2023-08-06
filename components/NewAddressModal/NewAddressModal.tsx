"use client";
import { useEffect, SetStateAction, Dispatch, type FC } from "react";
import { useState } from "react";
import Modal from "@/components/Modal";
import styles from "./styles.module.css";
import { AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import AddressService from "@/services/Address.service";
import { ListDelivery } from "@/types/Delivery";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/Select";
import Switch from "react-switch";
import { openDialog } from "@/redux/features/dialog/dialog.slice";
import { useAppDispatch } from "@/redux/hooks";
type Data = {
  id: string;
  name: string;
};
type NewAddress = {
  fullName: string;
  email: string;
  phone: string;
  province: string;
  district: string;
  ward: string;
  address: string;
};

interface Props {
  className: string;
  setListDelvery?: Dispatch<SetStateAction<ListDelivery[]>>;
}

const SelectAddressModal: FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const [listProvince, setListProvince] = useState<[] | Data[]>([]);
  const [listDistrict, setListDistrict] = useState<[] | Data[]>([]);
  const [listWard, setListWard] = useState<[] | Data[]>([]);
  const [newAddress, setNewAddress] = useState<NewAddress>({
    fullName: "",
    email: "",
    phone: "",
    province: "",
    district: "",
    ward: "",
    address: "",
  });
  const [errors, setErrors] = useState<Partial<NewAddress>>({});
  const dispatch = useAppDispatch();
  //Modal
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  //xét điều kiện nhập
  const isPhoneValid = (phone: string) => {
    const phoneRegex = /^0[0-9]{9}$/; // regex cho số điện thoại bắt đầu bằng 0, có 10 chữ số
    return phoneRegex.test(phone); // trả về true nếu phone đúng định dạng, false nếu ngược lại
  };
  const isEmailValid = (email: string) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/; // regex cho định dạng email hợp lệ
    return emailRegex.test(email); // trả về true nếu email đúng định dạng, false nếu ngược lại
  };

  //xét điều kiện nhập
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    const value = event.target.value;
    // Kiểm tra điều kiện lỗi của trường input và lưu vào state errors
    if (field === "phone" && value && !isPhoneValid(value)) {
      setErrors({ ...errors, [field]: "Số điện thoại không hợp lệ!" });
    } else if (field === "fullName" && !value) {
      setErrors({ ...errors, [field]: "Vui lòng điền họ tên đầy đủ" });
    } else if (field === "email" && value && !isEmailValid(value)) {
      setErrors({ ...errors, [field]: "Email không hợp lệ!" });
    } else {
      const newErrors = { ...errors };
      delete newErrors[field as keyof NewAddress]; // Xóa thông tin lỗi của trường input khi người dùng nhập lại
      setErrors(newErrors);
    }

    // Lưu giá trị của trường input vào state formData
    if (newAddress.hasOwnProperty(field)) {
      setNewAddress({
        ...newAddress,
        [field as keyof NewAddress]: value,
      });
    }
  };

  const handleChangeData = (value: string, field: string) => {
    if (field === "province") {
      const getDistrict = async () => {
        setListDistrict([]);
        let data = await AddressService.getDistrictData(value);
        setNewAddress({
          ...newAddress,
          province: value,
          district: "",
          ward: "",
        });
        setListDistrict(data);
        setListWard([]);
      };
      getDistrict();
    }
    if (field === "district") {
      const getWard = async () => {
        let data = await AddressService.getWardData(value);
        setListWard(data);
        setNewAddress({
          ...newAddress,
          district: value,
          ward: "",
        });
      };
      getWard();
    }
    if (field === "ward") {
      setNewAddress({
        ...newAddress,
        ward: value,
      });
    }
    const newErrors = { ...errors };
    delete newErrors.province;
    delete newErrors.district;
    delete newErrors.ward;
    setErrors(newErrors);
    // Lưu giá trị của trường input vào state formData
  };

  const handleSubmit = () => {
    //check error
    let error = {};
    if (newAddress.phone === "" && !isPhoneValid(newAddress.phone)) {
      error = { ...error, phone: "Số điện thoại không hợp lệ!" };
    }
    if (newAddress.fullName === "") {
      error = { ...error, fullName: "Vui lòng điền họ tên đầy đủ" };
    }
    if (newAddress.email === "" && !isEmailValid(newAddress.email)) {
      error = { ...error, email: "Email không hợp lệ!" };
    }
    if (newAddress.address === "") {
      error = { ...error, address: "Vui lòng nhập địa chỉ chính xác" };
    }
    if (newAddress.province === "") {
      error = { ...error, province: "Vui lòng chọn thành phố" };
    }
    if (newAddress.district === "") {
      error = { ...error, district: "Vui lòng chọn quận/huyện" };
    }
    if (newAddress.ward === "") {
      error = { ...error, ward: "Vui lòng chọn phường/xã" };
    }

    if (Object.keys(error).length > 0) {
      setErrors(error);
    } else {
      const saveData = async () => {
        let result = await AddressService.createNewAddress(newAddress, active);
        dispatch(openDialog({ message: result.message }));
        if (result.status) {
          handleCloseModal();
          setNewAddress({
            fullName: "",
            email: "",
            phone: "",
            province: "",
            district: "",
            ward: "",
            address: "",
          });
          //get new list address
          if (props.setListDelvery) {
            const listDelivery = await AddressService.getListDelivery();
            props.setListDelvery(listDelivery);
          }
        }
      };
      saveData();
    }
  };
  useEffect(() => {
    const getdata = async () => {
      const listCity = await AddressService.getCityData();
      setListProvince(listCity);
    };
    getdata();
  }, []);

  return (
    <>
      <div className={styles.main} onClick={handleOpenModal}>
        <button className={props.className}>Tạo Địa Chỉ Giao Hàng Mới</button>
      </div>
      <Modal
        isOpen={isOpen}
        styleModal={styles.modal}
        styleModalOverlay={styles.modalOverlay}
        onClose={handleCloseModal}
      >
        <div className={styles.wrapper}>
          <a className={styles.close} onClick={handleCloseModal}>
            <AiOutlineClose />
          </a>
          <article className="box-border flex flex-col items-stretch">
            <header className="mb-[0.75rem] box-border flex h-[45px] items-center bg-white px-3">
              <div className="text-left font-medium">ĐỊA CHỈ GIAO HÀNG MỚI</div>
            </header>
            <div className="box-border block border-y border-[#eee] bg-white">
              <div className="overflow-hidden">
                <div className="relative block pl-4 text-[17px] leading-[1.5] ">
                  <div className="flex items-stretch justify-start border-b border-[#eee] pr-3">
                    <div className="box-border w-20 flex-none py-3 pr-3">
                      <label className="relative box-border block h-full text-[16px] leading-[1.5] text-[#222]">
                        Họ Tên
                      </label>
                    </div>
                    <div className="box-border flex-auto py-3">
                      <div className="box-border flex justify-normal">
                        <div className="flex max-h-full min-h-[24px] w-full max-w-full items-center justify-start">
                          <input
                            className="m-0 box-border inline-block max-h-full w-full max-w-full appearance-none bg-transparent p-0 text-right leading-normal outline-0"
                            maxLength={125}
                            placeholder="Điền Họ Và Tên Đầy Đủ"
                            value={newAddress.fullName}
                            onChange={(e) => handleChange(e, "fullName")}
                          ></input>
                        </div>
                        {errors.fullName && (
                          <div className="box-border block">
                            <div className="absolute bottom-[-0.125rem] right-[0.375rem] mr-[0.375rem] mt-0 text-right text-[11px] text-[#ff3141]">
                              {errors.fullName}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative block pl-4 text-[17px] leading-[1.5]">
                  <div className="flex items-stretch justify-start border-b border-[#eee] pr-3">
                    <div className="box-border w-20 flex-none py-3 pr-3">
                      <label className="relative box-border block h-full text-[16px] leading-[1.5] text-[#222]">
                        Email
                      </label>
                    </div>
                    <div className="box-border flex-auto py-3">
                      <div className="box-border flex justify-normal">
                        <div className="flex max-h-full min-h-[24px] w-full max-w-full items-center justify-start">
                          <input
                            className="m-0 box-border inline-block max-h-full w-full max-w-full appearance-none bg-transparent p-0 text-right leading-normal outline-0"
                            maxLength={125}
                            placeholder="Điền Email"
                            onChange={(e) => handleChange(e, "email")}
                          ></input>
                        </div>
                        {errors.email && (
                          <div className="box-border block">
                            <div className="absolute bottom-[-0.125rem] right-[0.375rem] mr-[0.375rem] mt-0 text-right text-[11px] text-[#ff3141]">
                              {errors.email}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative block pl-4 text-[17px] leading-[1.5]">
                  <div className="flex items-stretch justify-start border-b border-[#eee] pr-3">
                    <div className="w-25 box-border flex-none py-3 pr-3">
                      <label className="relative box-border block h-full text-[16px] leading-[1.5] text-[#222]">
                        Số điện thoại
                      </label>
                    </div>
                    <div className="box-border flex-auto py-3">
                      <div className="box-border flex justify-normal">
                        <div className="flex max-h-full min-h-[24px] w-full max-w-full items-center justify-start">
                          <input
                            className="m-0 box-border inline-block max-h-full w-full max-w-full appearance-none bg-transparent p-0 text-right leading-normal outline-0"
                            maxLength={125}
                            placeholder="Điền số điện thoại"
                            onChange={(e) => handleChange(e, "phone")}
                            type="tel"
                          ></input>
                        </div>
                        {errors.phone && (
                          <div className="box-border block">
                            <div className="absolute bottom-[-0.125rem] right-[0.375rem] mr-[0.375rem] mt-0 text-right text-[11px] text-[#ff3141]">
                              {errors.phone}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative block pl-4 text-[17px] leading-[1.5]">
                  <div className="flex items-stretch justify-start border-b border-[#eee] pr-3">
                    <div className="w-25 box-border flex-none py-3 pr-3">
                      <label className="relative box-border block h-full text-[16px] leading-[1.5] text-[#222]">
                        Tỉnh/Thành Phố
                      </label>
                    </div>
                    <div className="box-border flex-auto py-3">
                      <div className="box-border flex justify-normal">
                        <div className="flex max-h-full min-h-[24px] w-full max-w-full items-center justify-end  text-[#222]">
                          <Select
                            onValueChange={(e) =>
                              handleChangeData(e, "province")
                            }
                          >
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Chọn Tỉnh/Thành Phố" />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                              <SelectGroup className="h-[400px]">
                                {listProvince.map((item) => {
                                  return (
                                    <SelectItem key={item.id} value={item.id}>
                                      {item.name}
                                    </SelectItem>
                                  );
                                })}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          <AiOutlineDown className="ml-[6px] h-[16px] w-[16px] text-[#AAAAAA]" />
                        </div>
                        {errors.province && (
                          <div className="box-border block">
                            <div className="absolute bottom-[-0.125rem] right-[0.375rem] mr-[0.375rem] mt-0 text-right text-[11px] text-[#ff3141]">
                              {errors.province}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative block pl-4 text-[17px] leading-[1.5]">
                  <div className="flex items-stretch justify-start border-b border-[#eee] pr-3">
                    <div className="w-25 box-border flex-none py-3 pr-3">
                      <label className="relative box-border block h-full text-[16px] leading-[1.5] text-[#222]">
                        Quận/Huyện
                      </label>
                    </div>
                    <div className="box-border flex-auto py-3">
                      <div className="box-border flex justify-normal">
                        <div className="flex max-h-full min-h-[24px] w-full max-w-full items-center justify-start">
                          <div className="flex max-h-full min-h-[24px] w-full max-w-full items-center justify-end text-[#222]">
                            {listDistrict.length > 0 ? (
                              <Select
                                onValueChange={(e) =>
                                  handleChangeData(e, "district")
                                }
                              >
                                <SelectTrigger className="w-[180px]">
                                  <SelectValue placeholder="Chọn Quận/Huyện" />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                  <SelectGroup className="h-[400px]">
                                    {listDistrict.map((item) => {
                                      return (
                                        <SelectItem
                                          key={item.id}
                                          value={item.id}
                                        >
                                          {item.name}
                                        </SelectItem>
                                      );
                                    })}
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            ) : (
                              <span className="text-[#AAAAAA]">
                                Chọn Quận/Huyện
                              </span>
                            )}
                            <AiOutlineDown className="ml-[6px] h-[16px] w-[16px] text-[#AAAAAA]" />
                          </div>
                          {errors.district && (
                            <div className="box-border block">
                              <div className="absolute bottom-[-0.125rem] right-[0.375rem] mr-[0.375rem] mt-0 text-right text-[11px] text-[#ff3141]">
                                {errors.district}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative block pl-4 text-[17px] leading-[1.5]">
                  <div className="flex items-stretch justify-start border-b border-[#eee] pr-3">
                    <div className="w-25 box-border flex-none py-3 pr-3">
                      <label className="relative box-border block h-full text-[16px] leading-[1.5] text-[#222]">
                        Phường/Xã
                      </label>
                    </div>
                    <div className="box-border flex-auto py-3">
                      <div className="box-border flex justify-normal">
                        <div className="flex max-h-full min-h-[24px] w-full max-w-full items-center justify-start">
                          <div className="flex max-h-full min-h-[24px] w-full max-w-full items-center justify-end text-[#222]">
                            {listWard.length > 0 ? (
                              <Select
                                onValueChange={(e) =>
                                  handleChangeData(e, "ward")
                                }
                              >
                                <SelectTrigger className="w-[180px]">
                                  <SelectValue placeholder="Chọn Phường/Xã" />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                  <SelectGroup className="h-[400px]">
                                    {listWard.map((item) => {
                                      return (
                                        <SelectItem
                                          key={item.id}
                                          value={item.id}
                                        >
                                          {item.name}
                                        </SelectItem>
                                      );
                                    })}
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            ) : (
                              <span className="text-[#AAAAAA]">
                                Chọn Phường/Xã
                              </span>
                            )}
                            <AiOutlineDown className="ml-[6px] h-[16px] w-[16px] text-[#AAAAAA]" />
                          </div>
                          {errors.ward && (
                            <div className="box-border block">
                              <div className="absolute bottom-[-0.125rem] right-[0.375rem] mr-[0.375rem] mt-0 text-right text-[11px] text-[#ff3141]">
                                {errors.ward}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative block pl-4 text-[17px] leading-[1.5]">
                  <div className="flex items-stretch justify-start pr-3">
                    <div className="box-border flex-auto py-3">
                      <div className="box-border flex justify-normal">
                        <textarea
                          rows={4}
                          className="m-0 box-border block max-h-full w-full max-w-full resize-none appearance-none p-0 leading-normal outline-none"
                          placeholder="Vui Lòng Nhập Địa Chỉ Chi Tiết"
                          onChange={(e) => handleChange(e, "address")}
                        ></textarea>
                      </div>
                    </div>
                    {errors.address && (
                      <div className="box-border block">
                        <div className="absolute bottom-[-0.125rem] right-[0.375rem] mr-[0.375rem] mt-0 text-right text-[11px] text-[#ff3141]">
                          {errors.address}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between bg-white p-3">
              <span>Đặt làm địa chỉ mặc định</span>
              <Switch
                onChange={() => setActive(!active)}
                checked={active}
                uncheckedIcon={false}
                checkedIcon={false}
                onColor="#ff620d"
                height={20}
                width={40}
                handleDiameter={16}
              />
            </div>
            <footer className="absolute bottom-0 w-full items-center justify-center bg-white px-3 py-2">
              <button
                onClick={handleSubmit}
                className="h-10 w-full rounded-full bg-[#ff620d] leading-10 text-white"
              >
                Tạo Mới
              </button>
            </footer>
          </article>
        </div>
      </Modal>
    </>
  );
};

export default SelectAddressModal;
