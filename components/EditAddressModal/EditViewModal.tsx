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

type editAddress = {
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
  id: number;
  setListDelvery?: Dispatch<SetStateAction<ListDelivery[]>>;
}

const EditViewModal: FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const [listProvince, setListProvince] = useState<[] | Data[]>([]);
  const [listDistrict, setListDistrict] = useState<[] | Data[]>([]);
  const [listWard, setListWard] = useState<[] | Data[]>([]);
  const [editAddress, setEditAddress] = useState<editAddress>({
    fullName: "",
    email: "",
    phone: "",
    province: "",
    district: "",
    ward: "",
    address: "",
  });
  const [errors, setErrors] = useState<Partial<editAddress>>({});
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
      delete newErrors[field as keyof editAddress]; // Xóa thông tin lỗi của trường input khi người dùng nhập lại
      setErrors(newErrors);
    }

    // Lưu giá trị của trường input vào state formData
    if (editAddress.hasOwnProperty(field)) {
      setEditAddress({
        ...editAddress,
        [field as keyof editAddress]: value,
      });
    }
  };

  const handleChangeData = (value: string, field: string) => {
    if (field === "province") {
      const getDistrict = async () => {
        setListDistrict([]);
        let data = await AddressService.getDistrictData(value);
        setEditAddress({
          ...editAddress,
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
        setEditAddress({
          ...editAddress,
          district: value,
          ward: "",
        });
      };
      getWard();
    }
    if (field === "ward") {
      setEditAddress({
        ...editAddress,
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
    if (editAddress.phone === "" && !isPhoneValid(editAddress.phone)) {
      error = { ...error, phone: "Số điện thoại không hợp lệ!" };
    }
    if (editAddress.fullName === "") {
      error = { ...error, fullName: "Vui lòng điền họ tên đầy đủ" };
    }
    if (editAddress.email === "" && !isEmailValid(editAddress.email)) {
      error = { ...error, email: "Email không hợp lệ!" };
    }
    if (editAddress.address === "") {
      error = { ...error, address: "Vui lòng nhập địa chỉ chính xác" };
    }
    if (editAddress.province === "") {
      error = { ...error, province: "Vui lòng chọn thành phố" };
    }
    if (editAddress.district === "") {
      error = { ...error, district: "Vui lòng chọn quận/huyện" };
    }
    if (editAddress.ward === "") {
      error = { ...error, ward: "Vui lòng chọn phường/xã" };
    }

    if (Object.keys(error).length > 0) {
      setErrors(error);
    } else {
      const saveData = async () => {
        let result = await AddressService.editAddress(editAddress, active);
        dispatch(openDialog({ message: result.message }));
        if (result.status) {
          handleCloseModal();
          setEditAddress({
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
    if (isOpen) {
      const getdata = async () => {
        let dataEdit = await AddressService.getDetail(props.id);
        const listProvince = await AddressService.getCityData();
        const listDistrict = await AddressService.getDistrictData(
          dataEdit.province
        );
        const listWard = await AddressService.getWardData(dataEdit.district);
        setActive(dataEdit.active!);
        delete dataEdit.active;
        setEditAddress(dataEdit);
        setListProvince(listProvince);
        setListDistrict(listDistrict);
        setListWard(listWard);

        //handleChangeData(dataEdit.province, "province")
        //handleChangeData(dataEdit.district, "district")
      };
      getdata();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <>
      <button className={props.className} onClick={handleOpenModal}>
        Sửa
      </button>

      <Modal
        isOpen={isOpen}
        styleModal={styles.edit_modal}
        styleModalOverlay={styles.edit_modalOverlay}
        onClose={handleCloseModal}
      >
        <div className={styles.edit_wrapper}>
          <a className={styles.edit_close} onClick={handleCloseModal}>
            <AiOutlineClose />
          </a>
          <article className={styles.edit_content}>
            <header className={styles.edit_header}>
              <div className={styles.edit_header_text}>CHỈNH SỬA CHI TIẾT</div>
            </header>
            <div className={styles.edit_content_body}>
              <div className={styles.edit_content_wrapper}>
                <div className={styles.edit_list_item}>
                  <div className={styles.edit_list_item_content}>
                    <div className={styles.edit_list_item_content_prefix}>
                      <label className={styles.edit_list_item_label}>
                        Họ Tên
                      </label>
                    </div>
                    <div className={styles.edit_list_item_content_main}>
                      <div className={styles.edit_item_wrapper}>
                        <div className={styles.edit_item_data}>
                          <input
                            className={styles.edit_item_input}
                            maxLength={125}
                            placeholder="Điền Họ Và Tên Đầy Đủ"
                            value={editAddress.fullName}
                            onChange={(e) => handleChange(e, "fullName")}
                          ></input>
                        </div>
                        {errors.fullName && (
                          <div className={styles.edit_block_error}>
                            <div className={styles.edit_error_text}>
                              {errors.fullName}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.edit_list_item}>
                  <div className={styles.edit_list_item_content}>
                    <div className={styles.edit_list_item_content}>
                      <label className={styles.edit_list_item_content_prefix}>
                        Email
                      </label>
                    </div>
                    <div className={styles.edit_list_item_content_main}>
                      <div className={styles.edit_item_wrapper}>
                        <div className={styles.edit_item_data}>
                          <input
                            className={styles.edit_item_input}
                            maxLength={125}
                            placeholder="Điền Email"
                            onChange={(e) => handleChange(e, "email")}
                            value={editAddress.email}
                          ></input>
                        </div>
                        {errors.email && (
                          <div className={styles.edit_block_error}>
                            <div className={styles.edit_error_text}>
                              {errors.email}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.edit_list_item}>
                  <div className={styles.edit_list_item_content}>
                    <div
                      className={styles.edit_list_item_content_prefix_select}
                    >
                      <label className={styles.edit_list_item_content_prefix}>
                        Số điện thoại
                      </label>
                    </div>
                    <div className={styles.edit_list_item_content_main}>
                      <div className={styles.edit_item_wrapper}>
                        <div className={styles.edit_item_data}>
                          <input
                            className={styles.edit_item_input}
                            maxLength={125}
                            placeholder="Điền số điện thoại"
                            onChange={(e) => handleChange(e, "phone")}
                            type="tel"
                            value={editAddress.phone}
                          ></input>
                        </div>
                        {errors.phone && (
                          <div className={styles.edit_block_error}>
                            <div className={styles.edit_error_text}>
                              {errors.phone}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.edit_list_item}>
                  <div className={styles.edit_list_item_content}>
                    <div
                      className={styles.edit_list_item_content_prefix_select}
                    >
                      <label className={styles.edit_list_item_content_prefix}>
                        Tỉnh/Thành Phố
                      </label>
                    </div>
                    <div className={styles.edit_list_item_content_main}>
                      <div className={styles.edit_item_wrapper}>
                        <div className={styles.edit_list_item_select}>
                          <Select
                            onValueChange={(e) =>
                              handleChangeData(e, "province")
                            }
                            value={editAddress.province}
                          >
                            <SelectTrigger className={styles.edit_select_width}>
                              <SelectValue placeholder="Chọn Tỉnh/Thành Phố" />
                            </SelectTrigger>
                            <SelectContent
                              className={styles.edit_select_background}
                            >
                              <SelectGroup
                                className={styles.edit_select_height}
                              >
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
                          <AiOutlineDown className={styles.edit_select_icon} />
                        </div>
                        {errors.province && (
                          <div className={styles.edit_block_error}>
                            <div className={styles.edit_error_text}>
                              {errors.province}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.edit_list_item}>
                  <div className={styles.edit_list_item_content}>
                    <div
                      className={styles.edit_list_item_content_prefix_select}
                    >
                      <label className={styles.edit_list_item_content_prefix}>
                        Quận/Huyện
                      </label>
                    </div>
                    <div className={styles.edit_list_item_content_main}>
                      <div className={styles.edit_item_wrapper}>
                        <div className={styles.edit_item_data}>
                          <div className={styles.edit_list_item_select}>
                            {listDistrict.length > 0 ? (
                              <Select
                                onValueChange={(e) =>
                                  handleChangeData(e, "district")
                                }
                                value={
                                  editAddress.district != ""
                                    ? editAddress.district
                                    : undefined
                                }
                              >
                                <SelectTrigger
                                  className={styles.edit_select_width}
                                >
                                  <SelectValue placeholder="Chọn Quận/Huyện" />
                                </SelectTrigger>
                                <SelectContent
                                  className={styles.edit_select_background}
                                >
                                  <SelectGroup
                                    className={styles.edit_select_height}
                                  >
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
                              <span className={styles.edit_text_disable}>
                                Chọn Quận/Huyện
                              </span>
                            )}
                            <AiOutlineDown
                              className={styles.edit_select_icon}
                            />
                          </div>
                          {errors.district && (
                            <div className={styles.edit_block_error}>
                              <div className={styles.edit_error_text}>
                                {errors.district}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.edit_list_item}>
                  <div className={styles.edit_list_item_content}>
                    <div
                      className={styles.edit_list_item_content_prefix_select}
                    >
                      <label className={styles.edit_list_item_content_prefix}>
                        Phường/Xã
                      </label>
                    </div>
                    <div className={styles.edit_list_item_content_main}>
                      <div className={styles.edit_item_wrapper}>
                        <div className={styles.edit_item_data}>
                          <div className={styles.edit_list_item_select}>
                            {listWard.length > 0 ? (
                              <Select
                                onValueChange={(e) =>
                                  handleChangeData(e, "ward")
                                }
                                value={
                                  editAddress.ward != ""
                                    ? editAddress.ward
                                    : undefined
                                }
                              >
                                <SelectTrigger
                                  className={styles.edit_select_width}
                                >
                                  <SelectValue placeholder="Chọn Phường/Xã" />
                                </SelectTrigger>
                                <SelectContent
                                  className={styles.edit_select_background}
                                >
                                  <SelectGroup
                                    className={styles.edit_select_height}
                                  >
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
                              <span className={styles.edit_text_disable}>
                                Chọn Phường/Xã
                              </span>
                            )}
                            <AiOutlineDown
                              className={styles.edit_select_icon}
                            />
                          </div>
                          {errors.ward && (
                            <div className={styles.edit_block_error}>
                              <div className={styles.edit_error_text}>
                                {errors.ward}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.edit_list_item}>
                  <div
                    className={styles.edit_list_item_content_prefix_textarea}
                  >
                    <div className={styles.edit_list_item_content_main}>
                      <div className={styles.edit_item_wrapper}>
                        <textarea
                          rows={4}
                          className={styles.edit_text_area}
                          placeholder="Vui Lòng Nhập Địa Chỉ Chi Tiết"
                          onChange={(e) => handleChange(e, "address")}
                          value={editAddress.address}
                        ></textarea>
                      </div>
                    </div>
                    {errors.address && (
                      <div className={styles.edit_block_error}>
                        <div className={styles.edit_error_text}>
                          {errors.address}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.edit_switch_active}>
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
            <footer className={styles.edit_footer}>
              <button
                onClick={handleSubmit}
                className={styles.edit_footer_button}
              >
                Xác Nhận
              </button>
            </footer>
          </article>
        </div>
      </Modal>
    </>
  );
};

export default EditViewModal;
