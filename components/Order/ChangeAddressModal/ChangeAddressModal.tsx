"use client";
import { useState, SetStateAction, Dispatch, useCallback, useEffect, type FC } from "react";
import Modal from "@/components/Modal";
import styles from "./styles.module.css";
import NewAddressModal from "@/components/NewAddressModal";
import { AiOutlineLeft } from "react-icons/ai";
import AddressService from "@/services/Address.service";
import { ListDelivery } from "@/types/Delivery";
import { ActiveFull, NotActive } from "@/components/Checked";
import EditViewModal from "./EditViewModal";
interface Props {
  orderChangeAddress: {
    id: number;
    full_address: string;
    address: string;
    province: string;
    dictrict: string;
    ward: string;
  };
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  handleAddressOrder: (order_id: number, address_id: number) => Promise<void>;
  className?: string;
}
const ChangeAddressModal: FC<Props> = (props: Props) => {
  //set edit
  const [isEdit, setIsEdit] = useState<boolean>(false);

  //set list delivery
  const [listDelivery, setListDelvery] = useState<ListDelivery[]>([]);

  const handleCloseModal = () => {
    props.setIsOpen(false);
  };

  //get index item active
  const getActiveDelivery: () => number = useCallback(() => {
    const active = listDelivery.findIndex((item) => {
      return item.active == true;
    });
    return active;
  }, [listDelivery]);

  //handel action when remove
  const handleRemove = async (id: number) => {
    const result = await AddressService.removeAddress(id);
    if (result) {
      let newData = await AddressService.getListDelivery();
      if (newData) {
        setListDelvery(newData);
      }
    }
  };

  const getActive = (item: any) => {
    if (
      item.address == props.orderChangeAddress.address &&
      item.province == props.orderChangeAddress.province &&
      item.dictrict == props.orderChangeAddress.dictrict &&
      item.ward == props.orderChangeAddress.ward
    )
      return true;
    else return false;
  };

  //when open again will set edit false
  useEffect(() => {
    if (props.isOpen) {
      const setup = async () => {
        setIsEdit(false);
        const getListDelivery = await AddressService.getListDelivery();

        const sortList = getListDelivery.sort((a, b) => Number(b.active) - Number(a.active));
        setListDelvery(sortList);
      };
      setup();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isOpen]);
  return (
    <>
      <Modal
        isOpen={props.isOpen}
        styleModal={styles.modal}
        styleModalOverlay={styles.modalOverlay}
        onClose={handleCloseModal}
      >
        <div className={styles.wrapper}>
          <div>
            <AiOutlineLeft onClick={handleCloseModal} className={styles.back} />
            <div className={styles.title}>Đổi Địa Chỉ Giao Hàng</div>
            <a className={`${styles.edit} ${isEdit ? styles.text_red : ""}`}>
              <span
                onClick={() => {
                  setIsEdit(!isEdit);
                }}
              >
                {!isEdit ? "Sửa" : "Hoàn Thành"}
              </span>
            </a>
          </div>
          {!isEdit ? (
            <div className={styles.delivery}>
              {listDelivery.map((item, index) => (
                <div
                  onClick={() => {
                    props.handleAddressOrder(props.orderChangeAddress.id, item.id);
                  }}
                  key={item.id}
                  className={styles.list_body}
                >
                  <div className={styles.address_item}>
                    <div className={styles.inner_wrapper}>
                      <div className={styles.checked_wrapper}>{getActive(item) ? <ActiveFull /> : <NotActive />}</div>
                      <div className={styles.address_content}>
                        <div className={styles.address_subject}>
                          <span className={styles.address_name}>{item.name}</span>
                          <span className={styles.address_phone}>{item.phone}</span>
                        </div>
                        <div className={styles.address_default}>
                          {item.active ? <span className={styles.address_default_text}>Mặc Định</span> : null}
                          {item.address}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.delivery_manage}>
              {listDelivery.map((item, index) => (
                <div key={item.id}>
                  <div className={styles.address_item_manage}>
                    <div className={styles.inner_wrapper}>
                      <div className={styles.address_content}>
                        <div className={styles.address_subject}>
                          <span className={styles.address_name}>{item.name}</span>
                          <span className={styles.address_phone}>{item.phone}</span>
                        </div>
                        <div className={styles.address_default}>
                          {item.active ? <span className={styles.address_default_text}>Mặc Định</span> : null}
                          {item.address}
                        </div>
                      </div>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.address_option}>
                      <div className={styles.address_button_group}>
                        <EditViewModal
                          className={styles.address_button_manage}
                          id={item.id}
                          setListDelvery={setListDelvery}
                        >
                          <span>Sửa</span>
                        </EditViewModal>
                        <button onClick={() => handleRemove(item.id)} className={styles.address_button_manage}>
                          Xóa
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className={styles.footer}>
            <NewAddressModal className={styles.button_create} setListDelvery={setListDelvery} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ChangeAddressModal;
