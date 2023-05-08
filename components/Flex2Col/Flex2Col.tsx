import type { FC } from "react";

import styles from "./Flex2Col.module.css";

const Flex2Col: FC = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={styles.products}>{children}</div>
    </>
  );
};
export default Flex2Col;
