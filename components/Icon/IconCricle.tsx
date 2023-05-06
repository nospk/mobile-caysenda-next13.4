import Image from "next/image";
import type { FC } from "react";
import styles from "./Icon.module.css";
interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}
const Icon: FC<Props> = (props) => {
  return (
    <Image
      className={`${styles.icon_cricle} ${props.className}`}
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  );
};

export default Icon;
