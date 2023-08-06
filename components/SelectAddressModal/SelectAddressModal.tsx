"use client";
import {
  useState,
  SetStateAction,
  Dispatch,
  useCallback,
  useEffect,
  type FC,
} from "react";
import Modal from "@/components/Modal";
import styles from "./styles.module.css";
import NewAddressModal from "@/components/NewAddressModal";
import { AiOutlineClose, AiOutlineEnvironment } from "react-icons/ai";
import AddressService from "@/services/Address.service";
import { ListDelivery } from "@/types/Delivery";
interface Props {
  address: string;
  className: string;
  setAddress: Dispatch<SetStateAction<string>>;
  listDelivery: ListDelivery[];
}
const SelectAddressModal: FC<Props> = (props) => {
  //set open - close
  const [isOpen, setIsOpen] = useState(false);
  //set list delivery
  const [listDelivery, setListDelvery] = useState<ListDelivery[]>(
    props.listDelivery
  );
  //hanlde open - close
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const getActiveDelivery: () => number = useCallback(() => {
    const active = listDelivery.findIndex((item) => {
      return item.active == true;
    });
    return active;
  }, [listDelivery]);

  useEffect(() => {
    for (const item of listDelivery) {
      if (item.active == true) props.setAddress(item.address);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listDelivery]);
  return (
    <>
      <div className={styles.main} onClick={handleOpenModal}>
        <span className={props.className}>{props.address}</span>
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
          <div className={styles.title}>Địa Chỉ Giao Hàng</div>
          <div className={styles.delivery_to}>
            <div className={styles.sub_title}>Địa chỉ hiện tại</div>
            <div className={styles.current_delivery}>
              <AiOutlineEnvironment className={styles.icon} />
              <div className={styles.current_delivery_address}>
                <div className={styles.name_phone_box}>
                  <span className={styles.name}>
                    {listDelivery[getActiveDelivery()].name}
                  </span>
                  <span className={styles.phone}>
                    {listDelivery[getActiveDelivery()].phone}
                  </span>
                </div>
                <div className={styles.address}>
                  {listDelivery[getActiveDelivery()].address}
                </div>
              </div>
            </div>
            <div className={styles.sub_title}>Chọn địa chỉ nhận hàng</div>
            <div className={styles.other_delivery_list}>
              {listDelivery.map((item, index) => (
                <div
                  onClick={() => {
                    AddressService.setActiveDelivery(item.id).then((result) => {
                      if (result.status) {
                        let newAcitve = listDelivery;
                        newAcitve[getActiveDelivery()].active = false;
                        newAcitve[index].active = true;
                        setListDelvery(newAcitve);
                        props.setAddress(item.address);
                        handleCloseModal();
                      }
                    });
                  }}
                  key={item.name}
                  className={styles.list_body}
                >
                  <div className={styles.list_body_inner}>
                    <div className={styles.list_body_content}>
                      <div className={styles.list_body_box}>
                        <span className={styles.name}>{item.name}</span>
                        <span className={styles.phone}>{item.phone}</span>
                      </div>
                      <div className={styles.address}>{item.address}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.footer}>
              <NewAddressModal
                className={styles.button_create}
                setListDelvery={setListDelvery}
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SelectAddressModal;
