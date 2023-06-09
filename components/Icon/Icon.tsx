import Image from "next/image";
import type { FC } from "react";

interface Props {
  className?: string;
  src: string;
  alt: string;
  isCricle?: boolean;
}
const Icon: FC<Props> = (props) => {
  return (
    <div className={props.className}>
      <Image
        className={`${props.isCricle ? "rounded-full" : ""}`}
        src={props.src}
        alt={props.alt}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default Icon;
