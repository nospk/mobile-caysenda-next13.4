"use client";
import React, { useEffect, useState } from "react";
import { ListDelivery } from "@/types/Delivery";
import AddressService from "@/services/Address.service";
import { AiOutlineRight } from "react-icons/ai";
import { ActiveFull, NotActive } from "@/components/Checked";
import { RiEditBoxLine } from "react-icons/ri";
import EditViewModal from "@/components/EditAddressModal/EditViewModal";
import NewAddressModal from "@/components/NewAddressModal";
import { openDialog } from "@/redux/features/dialog/dialog.slice";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
export const dynamic = 'force-dynamic';
type T_listDelete = number[];

const ChangeAddress = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  //set edit
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [listDelete, setListDelete] = useState<T_listDelete>([]);
  const [listDelivery, setListDelvery] = useState<ListDelivery[]>([]);
  useEffect(() => {
    const setup = async () => {
      const getdata = await AddressService.getListDelivery();
      setListDelvery(getdata);
    };
    setup();
  }, []);
  const handleDelete = (id: number): void => {
    if (listDelete.indexOf(id) == -1) {
      setListDelete((prev) => [...prev, id]);
    } else {
      setListDelete((prev) => prev.filter((value) => value !== id));
    }
  };
  const deleteAddress = async (): Promise<void> => {
    const result = await AddressService.removeListAddress(listDelete);
    if (result.status) {
      dispatch(openDialog({ message: result.message }));
      router.push("/setting");
    } else {
      dispatch(openDialog({ message: result.message }));
    }
  };
  const handleSelectAll = (): void => {
    if (listDelete.length == listDelivery.length) {
      setListDelete([]);
    } else {
      setListDelete(listDelivery.map((item) => item.id));
    }
  };
  return (
    <>
      <div
        onClick={() => {
          setIsEdit(!isEdit);
        }}
        className={styles.header_edit}
      >
        <span className={`${isEdit ? styles.text_edit : ""} `}>{!isEdit ? "Sửa" : "Hoàn Thành"}</span>
      </div>
      <div className={styles.content}>
        {!isEdit
          ? listDelivery.map((item) => (
              <div key={item.address} className={styles.list_item}>
                <div className={styles.m_list_item}>
                  <div className={styles.item_main}>
                    <div className={styles.item_wrapper}>
                      <span className={styles.item_name}>{item.name}</span>
                      <span className={styles.item_phone}>{item.phone}</span>
                    </div>
                    <div className={styles.item_content}>
                      <span className={styles.item_down}>{item.address.split(",").splice(1, 4).join(",")}</span>
                      <span className={styles.item_down}>{item.address.split(",")[0]}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.item_edit}>
                  <EditViewModal className={styles.button_edit} id={item.id} setListDelvery={setListDelvery}>
                    <AiOutlineRight className={styles.icon_edit} />
                  </EditViewModal>
                </div>
              </div>
            ))
          : listDelivery.map((item) => (
              <div key={item.address} className={styles.list_item_edit}>
                <div
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                  className={styles.acitve_item_edit}
                >
                  {listDelete.indexOf(item.id) != -1 ? <ActiveFull /> : <NotActive />}
                </div>
                <div className={styles.m_list_item_edit}>
                  <div className={styles.item_main_edit}>
                    <div className={styles.item_wrapper}>
                      <span className={styles.item_name}>{item.name}</span>
                      <span className={styles.item_phone}>{item.phone}</span>
                    </div>
                    <div className={styles.item_content}>
                      <span className={styles.item_down}>{item.address.split(",").splice(1, 4).join(",")}</span>
                      <span className={styles.item_down}>{item.address.split(",")[0]}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.item_edit}>
                  <EditViewModal className={styles.button_edit} id={item.id} setListDelvery={setListDelvery}>
                    <RiEditBoxLine className={styles.icon_edit} />
                  </EditViewModal>
                </div>
              </div>
            ))}
      </div>
      {!isEdit ? (
        <div className={styles.footer}>
          <NewAddressModal className={styles.button_create} setListDelvery={setListDelvery} />
        </div>
      ) : (
        <div className={styles.footer_edit}>
          <div onClick={handleSelectAll} className={styles.wrapper_active}>
            {listDelete.length == listDelivery.length ? <ActiveFull /> : <NotActive />}
          </div>
          <div className={styles.select_all}>
            <label>Chọn tất cả</label>
          </div>

          <div className={styles.wrapper_button_remove}>
            <button onClick={deleteAddress} className={styles.button_remove}>
              Xóa Bỏ
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(ChangeAddress);
