import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
const Variant = React.memo(function Variant({
  name,
  image,
  order,
  className,
  setActive,
  index,
}: {
  name: string;
  image: string;
  order: number;
  className: string;
  setActive: any;
  index: number;
}) {
  return (
    <div onClick={() => setActive(index)} className={className}>
      <div>
        <div className={styles.wapper_offer_number}>
          <div
            className={`${styles.offer_number} ${
              order > 0 ? "" : styles.hidden_offer
            }`}
          >
            <span className={styles.span_offer_number}>
              {"x"}
              {order}
            </span>
          </div>
          <div className={styles.image_variant}>
            <Image
              className="rounded-xl"
              src={image}
              alt={name}
              fill
              object-fit={"contain"}
              sizes="50vw"
            />
          </div>
          <div className={styles.name_variant}>
            <span className={styles.span_name_variant}>{name}</span>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Variant;
