"use client";
import { useCallback, type FC } from "react";
import { useState } from "react";
import Modal from "@/components/Modal";
import styles from "./styles.module.css";
import { numberToString } from "@/lib/formatPrice";
import Variant from "./Variant";
import InforWholeSale from "./InforWholeSale";
import ButtonClose from "./ButtonClose";
interface Variants {
  name: string;
  image: string;
  stock: number;
  order: number;
  sku: string;
}
interface Props {
  className?: string;
}
const AddToCartModal: FC<Props> = (props) => {
  const [variants, setVariants] = useState<Variants[]>([
    {
      name: "Con Voi",
      image: "https://caysenda.vn/resources/upload/22216875771_102253868.jpg",
      stock: 16837,
      order: 0,
      sku: "ZCT-1-1",
    },
    {
      name: "Con Cáo",
      image: "https://caysenda.vn/resources/upload/22298539415_102253868.jpg",
      stock: 2167,
      order: 0,
      sku: "ZCT-1-2",
    },
  ]);
  const [indexAcitve, setIndexAcitve] = useState<number>(0);
  const [totalOrder, setTotalOrder] = useState<number>(0);
  const [totalType, setTotalType] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [activePrice, setActivePrice] = useState<number>(0);
  const setActive = useCallback((index: number) => {
    setIndexAcitve(index);
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProdct] = useState({
    price: 25000,
    price1: 22000,
    price2: 19400,
    condition: 6,
    condition1: 720,
    condition2: 7200,
    unit: "Cái",
  });
  const decreaseOrder = useCallback(() => {
    const newVariants = [...variants];
    newVariants[indexAcitve].order = Number(newVariants[indexAcitve].order) - 1;
    if (newVariants[indexAcitve].order < 0) newVariants[indexAcitve].order = 0;
    setVariants(newVariants);
    calculatorOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indexAcitve]);
  const increaseOrder = useCallback(() => {
    const newVariants = [...variants];
    newVariants[indexAcitve].order = Number(newVariants[indexAcitve].order) + 1;
    if (newVariants[indexAcitve].order > newVariants[indexAcitve].stock)
      newVariants[indexAcitve].order = newVariants[indexAcitve].stock;
    setVariants(newVariants);
    calculatorOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indexAcitve]);
  const changeOrder = useCallback(
    (e: any) => {
      const newVariants = [...variants];
      newVariants[indexAcitve].order = Number(e.target.value);
      if (newVariants[indexAcitve].order < 0)
        newVariants[indexAcitve].order = 0;
      if (newVariants[indexAcitve].order > newVariants[indexAcitve].stock)
        newVariants[indexAcitve].order = newVariants[indexAcitve].stock;
      setVariants(newVariants);
      calculatorOrder();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [indexAcitve]
  );
  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
    document.body.classList.add("overflow-hidden");
  }, []);
  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
    document.body.classList.remove("overflow-hidden");
  }, []);
  const calculatorOrder = () => {
    //Cal orders
    let orders = variants.reduce(function (order, item) {
      return order + item.order;
    }, 0);

    //Cal types
    let types = variants.reduce(function (type, item) {
      if (item.order > 0) return type + 1;
      return type;
    }, 0);

    //Cal price and level price
    let price = 0;
    if (orders >= product.condition2) {
      price = orders * Number(product.price2);
      setActivePrice(2);
    } else if (orders >= product.condition1) {
      price = orders * Number(product.price1);
      setActivePrice(1);
    } else {
      price = orders * Number(product.price);
      setActivePrice(0);
    }

    //Set
    setTotalOrder(orders);
    setTotalType(types);
    setTotalPrice(price);
  };
  const pushToServer = () => {
    handleCloseModal();
  };
  return (
    <>
      <button
        onClick={handleOpenModal}
        className={props.className ? props.className : styles.button}
      >
        Thêm vào giỏ hàng
      </button>

      <Modal
        isOpen={isOpen}
        styleModal={styles.modal}
        styleModalOverlay={styles.modalOverlay}
        onClose={handleCloseModal}
      >
        <div className={styles.wrapper_modal}>
          <ButtonClose handleCloseModal={handleCloseModal} />
          <div className={styles.modal_body}>
            <div className={styles.body_left}>
              <div className={styles.wapper_left}>
                {variants.map((variant, index) => (
                  <Variant
                    key={variant.name}
                    name={variant.name}
                    image={variant.image}
                    order={variant.order}
                    className={`${
                      indexAcitve == index ? styles.varriant_active : ""
                    } ${
                      index == 0
                        ? styles.wapper_variant_first
                        : styles.wapper_variant
                    }`}
                    setActive={setActive}
                    index={index}
                  />
                ))}
              </div>
            </div>
            <div className={styles.wapper_right}>
              <div className={styles.body_right}>
                <InforWholeSale
                  image={variants[indexAcitve].image}
                  name={variants[indexAcitve].name}
                  activePrice={activePrice}
                  product={product}
                />
                <div className={styles.order_widget_wapper}>
                  <div className={styles.order_item}>
                    <div className={styles.order_info}>
                      <span className={styles.order_name}>
                        {variants[indexAcitve].name}
                      </span>
                      <span className={styles.order_stock}>
                        Tồn kho: {variants[indexAcitve].stock}
                      </span>
                    </div>
                    <div className={styles.order_control}>
                      <div
                        onClick={decreaseOrder}
                        className={styles.decrease_wapper}
                      >
                        <div className={styles.icon_wapper}>
                          <div
                            className={`${styles.icon_decrease} ${
                              variants[indexAcitve].order > 0
                                ? "bg-[#666666]"
                                : "bg-[#CCCCCC]"
                            }`}
                          ></div>
                        </div>
                      </div>
                      <input
                        className={styles.input_number}
                        placeholder="0"
                        type="number"
                        value={
                          variants[indexAcitve].order != 0
                            ? variants[indexAcitve].order
                            : ""
                        }
                        onChange={changeOrder}
                        min="0"
                        max={variants[indexAcitve].stock}
                      />
                      <div
                        onClick={increaseOrder}
                        className={styles.increase_wapper}
                      >
                        <div className={styles.icon_wapper}>
                          <div className={styles.icon_increase_level}></div>
                          <div className={styles.icon_increase_vertical}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.modal_footer}>
            <div className={styles.condition_wapper}>
              <div className={styles.count_total_wapper}>
                {totalOrder > 0 && totalOrder < product.condition ? (
                  <div className={styles.condition}>
                    <span className={styles.span_condition}>
                      Tối thiểu {product.condition} {product.unit}
                    </span>
                  </div>
                ) : null}

                <div>
                  <div className={styles.count_total}>
                    <div className={styles.count_total_num}>
                      <span className={styles.span_count_total}>
                        Đã Chọn: {totalType} Loại {totalOrder} Cái
                      </span>
                    </div>
                    <div className={styles.count_price}>
                      <span className={styles.span_count_price}>
                        {"Tổng cộng : "}
                      </span>
                      <div className={styles.total_price}>
                        <span className={styles.span_total_price}>
                          {numberToString(totalPrice)}
                        </span>
                        <span className={styles.span_curency}>{" đ"}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.button_confirm} onClick={pushToServer}>
                  Xác Nhận
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default AddToCartModal;
