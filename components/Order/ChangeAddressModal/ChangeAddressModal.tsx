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
  address?: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  className?: string;
  listDelivery: ListDelivery[];
}
const ChangeAddressModal: FC<Props> = (props: Props) => {
  //set edit
  const [isEdit, setIsEdit] = useState<boolean>(false);

  //set list delivery
  const [listDelivery, setListDelvery] = useState<ListDelivery[]>(props.listDelivery);
  //hanlde open - close
  const handleOpenModal = () => {
    props.setIsOpen(true);
  };
  const handleCloseModal = () => {
    props.setIsOpen(false);
  };

  //get index item active
  const getActiveDelivery: () => number = useCallback(() => {
    const active = listDelivery.findIndex((item) => {
      return item.active == 1;
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

  //when open again will set edit false
  useEffect(() => {
    if (props.isOpen) {
      setIsEdit(false);
      const sortList = listDelivery.sort((a, b) => Number(b.active) - Number(a.active));
      setListDelvery(sortList);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isOpen]);
  return (
    <>
      <div className={styles.main} onClick={handleOpenModal}>
        <span className={props.className}>{props.address}</span>
      </div>
      <Modal
        isOpen={props.isOpen}
        styleModal={styles.modal}
        styleModalOverlay={styles.modalOverlay}
        onClose={handleCloseModal}
      >
        <div className={styles.wrapper}>
          <div>
            <AiOutlineLeft onClick={handleCloseModal} className={styles.back} />
            <div className={styles.title}>Địa Chỉ Giao Hàng</div>
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
                    AddressService.setActiveDelivery(item.id).then((result) => {
                      if (result.status) {
                        let newAcitve = listDelivery;
                        let indexActive = getActiveDelivery();
                        indexActive >= 0 ? (newAcitve[getActiveDelivery()].active = 0) : null;
                        newAcitve[index].active = 1;
                        setListDelvery(newAcitve);
                        handleCloseModal();
                      }
                    });
                  }}
                  key={item.id}
                  className={styles.list_body}
                >
                  <div className={styles.address_item}>
                    <div className={styles.inner_wrapper}>
                      <div className={styles.checked_wrapper}>{item.active ? <ActiveFull /> : <NotActive />}</div>
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
