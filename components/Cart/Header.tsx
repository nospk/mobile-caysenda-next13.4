import { AiOutlineEnvironment, AiOutlineRight } from "react-icons/ai";
import styles from "./styles.module.css";
import SelectAddressModal from "../SelectAddressModal/SelectAddressModal";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setRemove } from "@/redux/features/removeCart/removeCart.slice";
interface Props {
  address: string
}
const Header: React.FC<Props> = ({address}) => {
  const isRemove = useAppSelector((state) => state.removeCartReducer.isRemove);
  const dispatch = useAppDispatch();
  return (
    <header className={styles.header}>
      <div className={styles.header_wapper}>
        <div className={styles.address}>
          <span className={styles.address_title}>Địa chỉ</span>
          <div className={styles.address_content}>
            <AiOutlineEnvironment className={styles.address_icon_place} />
            <div className={styles.address_box}>
              <SelectAddressModal>
                <span className={styles.address_detail}>
                  {address}
                </span>
              </SelectAddressModal>

              <AiOutlineRight className={styles.address_icon_arrow} />
            </div>
          </div>
        </div>
        <div className={styles.remove_button} onClick={() => dispatch(setRemove())}>
          {isRemove ? (
            <span className={styles.remove_text_confirm}>Hoàn Tất</span>
          ) : (
            <span className={styles.remove_text}>Xóa</span>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
