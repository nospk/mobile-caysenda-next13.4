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
import { isPhoneValid, isEmailValid } from "@/lib/validation";
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
          <article className={styles.content}>
            <header className={styles.header}>
              <div className={styles.header_text}>ĐỊA CHỈ GIAO HÀNG MỚI</div>
            </header>
            <div className={styles.content_body}>
              <div className={styles.content_wrapper}>
                <div className={styles.list_item}>
                  <div className={styles.list_item_content}>
                    <div className={styles.list_item_content_prefix}>
                      <label className={styles.list_item_label}>Họ Tên</label>
                    </div>
                    <div className={styles.list_item_content_main}>
                      <div className={styles.item_wrapper}>
                        <div className={styles.item_data}>
                          <input
                            className={styles.item_input}
                            maxLength={125}
                            placeholder="Điền Họ Và Tên Đầy Đủ"
                            value={newAddress.fullName}
                            onChange={(e) => handleChange(e, "fullName")}
                          ></input>
                        </div>
                        {errors.fullName && (
                          <div className={styles.block_error}>
                            <div className={styles.error_text}>
                              {errors.fullName}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.list_item}>
                  <div className={styles.list_item_content}>
                    <div className={styles.list_item_content}>
                      <label className={styles.list_item_content_prefix}>
                        Email
                      </label>
                    </div>
                    <div className={styles.list_item_content_main}>
                      <div className={styles.item_wrapper}>
                        <div className={styles.item_data}>
                          <input
                            className={styles.item_input}
                            maxLength={125}
                            placeholder="Điền Email"
                            onChange={(e) => handleChange(e, "email")}
                          ></input>
                        </div>
                        {errors.email && (
                          <div className={styles.block_error}>
                            <div className={styles.error_text}>
                              {errors.email}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.list_item}>
                  <div className={styles.list_item_content}>
                    <div className={styles.list_item_content_prefix_select}>
                      <label className={styles.list_item_content_prefix}>
                        Số điện thoại
                      </label>
                    </div>
                    <div className={styles.list_item_content_main}>
                      <div className={styles.item_wrapper}>
                        <div className={styles.item_data}>
                          <input
                            className={styles.item_input}
                            maxLength={125}
                            placeholder="Điền số điện thoại"
                            onChange={(e) => handleChange(e, "phone")}
                            type="tel"
                          ></input>
                        </div>
                        {errors.phone && (
                          <div className={styles.block_error}>
                            <div className={styles.error_text}>
                              {errors.phone}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.list_item}>
                  <div className={styles.list_item_content}>
                    <div className={styles.list_item_content_prefix_select}>
                      <label className={styles.list_item_content_prefix}>
                        Tỉnh/Thành Phố
                      </label>
                    </div>
                    <div className={styles.list_item_content_main}>
                      <div className={styles.item_wrapper}>
                        <div className={styles.list_item_select}>
                          <Select
                            onValueChange={(e) =>
                              handleChangeData(e, "province")
                            }
                          >
                            <SelectTrigger className={styles.select_width}>
                              <SelectValue placeholder="Chọn Tỉnh/Thành Phố" />
                            </SelectTrigger>
                            <SelectContent className={styles.select_background}>
                              <SelectGroup className={styles.select_height}>
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
                          <AiOutlineDown className={styles.select_icon} />
                        </div>
                        {errors.province && (
                          <div className={styles.block_error}>
                            <div className={styles.error_text}>
                              {errors.province}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.list_item}>
                  <div className={styles.list_item_content}>
                    <div className={styles.list_item_content_prefix_select}>
                      <label className={styles.list_item_content_prefix}>
                        Quận/Huyện
                      </label>
                    </div>
                    <div className={styles.list_item_content_main}>
                      <div className={styles.item_wrapper}>
                        <div className={styles.item_data}>
                          <div className={styles.list_item_select}>
                            {listDistrict.length > 0 ? (
                              <Select
                                onValueChange={(e) =>
                                  handleChangeData(e, "district")
                                }
                              >
                                <SelectTrigger className={styles.select_width}>
                                  <SelectValue placeholder="Chọn Quận/Huyện" />
                                </SelectTrigger>
                                <SelectContent
                                  className={styles.select_background}
                                >
                                  <SelectGroup className={styles.select_height}>
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
                              <span className={styles.text_disable}>
                                Chọn Quận/Huyện
                              </span>
                            )}
                            <AiOutlineDown className={styles.select_icon} />
                          </div>
                          {errors.district && (
                            <div className={styles.block_error}>
                              <div className={styles.error_text}>
                                {errors.district}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.list_item}>
                  <div className={styles.list_item_content}>
                    <div className={styles.list_item_content_prefix_select}>
                      <label className={styles.list_item_content_prefix}>
                        Phường/Xã
                      </label>
                    </div>
                    <div className={styles.list_item_content_main}>
                      <div className={styles.item_wrapper}>
                        <div className={styles.item_data}>
                          <div className={styles.list_item_select}>
                            {listWard.length > 0 ? (
                              <Select
                                onValueChange={(e) =>
                                  handleChangeData(e, "ward")
                                }
                              >
                                <SelectTrigger className={styles.select_width}>
                                  <SelectValue placeholder="Chọn Phường/Xã" />
                                </SelectTrigger>
                                <SelectContent
                                  className={styles.select_background}
                                >
                                  <SelectGroup className={styles.select_height}>
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
                              <span className={styles.text_disable}>
                                Chọn Phường/Xã
                              </span>
                            )}
                            <AiOutlineDown className={styles.select_icon} />
                          </div>
                          {errors.ward && (
                            <div className={styles.block_error}>
                              <div className={styles.error_text}>
                                {errors.ward}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.list_item}>
                  <div className={styles.list_item_content_prefix_textarea}>
                    <div className={styles.list_item_content_main}>
                      <div className={styles.item_wrapper}>
                        <textarea
                          rows={4}
                          className={styles.text_area}
                          placeholder="Vui Lòng Nhập Địa Chỉ Chi Tiết"
                          onChange={(e) => handleChange(e, "address")}
                        ></textarea>
                      </div>
                    </div>
                    {errors.address && (
                      <div className={styles.block_error}>
                        <div className={styles.error_text}>
                          {errors.address}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.switch_active}>
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
            <footer className={styles.footer}>
              <button onClick={handleSubmit} className={styles.footer_button}>
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
