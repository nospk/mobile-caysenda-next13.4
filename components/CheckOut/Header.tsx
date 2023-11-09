import { Icon } from "@/components/Icon";
import { AiOutlineRight } from "react-icons/ai";
import { ListDelivery } from "@/types/Delivery";
import EditAddressModal from "@/components/EditAddressModal";
import { type FC, SetStateAction, Dispatch } from "react";
import styles from "./styles.module.css";
interface Props {
  listDelivery: ListDelivery[];
  activeAddress: ListDelivery;
  setAddress: Dispatch<SetStateAction<ListDelivery>>;
}
const Header: FC<Props> = ({ listDelivery, activeAddress, setAddress }) => {
  let detail_address;
  let district_address;
  if (activeAddress) {
    let addressSplit = activeAddress.address.split(",");
    detail_address = addressSplit.shift() as string;
    district_address = addressSplit.join(",");
  } else {
    detail_address = "Chưa có địa chỉ giao hàng, vui lòng thêm địa chỉ trước khi đặt hàng";
    district_address = "";
  }

  return (
    <div className={styles.wrapper_header}>
      <div className={styles.header}>
        <div className={styles.header_content}>
          <Icon
            src="/place.png"
            alt="icon-place"
            className={styles.header_icon}
          />
          <div className={styles.address}>
            <div className={styles.address_gray}>{district_address}</div>
            <EditAddressModal
              address={detail_address}
              setAddress={setAddress}
              listDelivery={listDelivery}
              className={styles.address_detail}
            />
            {activeAddress ? (
              <div className={styles.address_gray}>
                <span className={styles.address_margin}>
                  {activeAddress.name}
                </span>
                <span className={styles.address_margin}>
                  {activeAddress.phone}
                </span>
              </div>
            ) : <span className={styles.header_warnning}>Vui lòng điền địa chỉ giao hàng</span>}
          </div>
          <AiOutlineRight className={styles.address_icon} />
        </div>
      </div>
    </div>
  );
};
export default Header;
