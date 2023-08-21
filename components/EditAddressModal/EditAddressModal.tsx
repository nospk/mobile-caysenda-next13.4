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
import { AiOutlineLeft } from "react-icons/ai";
import AddressService from "@/services/Address.service";
import { ListDelivery } from "@/types/Delivery";
import { ActiveFull, NotActive } from "@/components/Checked";
interface Props {
  address: string;
  className?: string;
  setAddress: Dispatch<SetStateAction<ListDelivery>>;
  listDelivery: ListDelivery[];
}
const SelectAddressModal: FC<Props> = (props: Props) => {
  //set edit
  const [isEdit, setIsEdit] = useState<boolean>(false);
  //set open - close
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
    const sortList = listDelivery.sort(
      (a, b) => Number(b.active) - Number(a.active)
    );
    setListDelvery(sortList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listDelivery[0].active]);
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
          <div>
            <AiOutlineLeft onClick={handleCloseModal} className={styles.back} />
            <div className={styles.title}>Địa Chỉ Giao Hàng</div>
            <a className={styles.edit}>
              <span
                onClick={() => {
                  setIsEdit(!isEdit);
                }}
              >
                {!isEdit ? "Sửa" : "Hoàn Thành"}
              </span>
            </a>
          </div>
          <div className={styles.delivery_to}>
            {listDelivery.map((item, index) => (
              <div
                onClick={() => {
                  AddressService.setActiveDelivery(item.id).then((result) => {
                    if (result.status) {
                      let newAcitve = listDelivery;
                      newAcitve[getActiveDelivery()].active = false;
                      newAcitve[index].active = true;
                      setListDelvery(newAcitve);
                      props.setAddress(item);
                      handleCloseModal();
                    }
                  });
                }}
                key={item.name}
                className={styles.list_body}
              >
                <div className="p-[1rem]">
                  <div className="flex flex-row items-center">
                    <div className={styles.checked_wrapper}>
                      {item.active ? <ActiveFull /> : <NotActive />}
                    </div>
                    <div className="flex-1">
                      <div className="box-border flex flex-row flex-wrap items-center pb-[0.25rem]">
                        <span className="mr-[0.25rem] text-[15px] font-semibold">
                          {item.name}
                        </span>
                        <span className="mr-[0.25rem] text-[13px] text-[#222]">
                          {item.phone}
                        </span>
                      </div>
                      <div className="relative break-normal text-[12px] leading-[1rem] text-[#666]">
                        {item.active ? (
                          <span className="box-border w-[100px] border border-[#ff9d7c] text-center text-red-400 mr-[0.25rem]">
                            Mặc Định
                          </span>
                        ) : null}
                        {item.address}
                      </div>
                    </div>
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
      </Modal>
    </>
  );
};

export default SelectAddressModal;
