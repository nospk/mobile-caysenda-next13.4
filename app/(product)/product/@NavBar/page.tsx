"use client";
import { useRouter } from "next/navigation";
import { useState, useCallback, useEffect } from "react";
import {
  AiOutlineLeft,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineShareAlt,
  AiOutlineHome,
} from "react-icons/ai";
import styles from "./styles.module.css";
import { openDialog } from "@/redux/features/dialog/dialog.slice";
import { useAppDispatch } from "@/redux/hooks";
export default function Page() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const opticalVariants = {
    0: "bg-opacity-0",
    10: "bg-opacity-10",
    20: "bg-opacity-20",
    30: "bg-opacity-40",
    40: "bg-opacity-40",
    50: "bg-opacity-50",
    60: "bg-opacity-60",
    80: "bg-opacity-80",
    100: "bg-opacity-100",
  };
  const [change, setChange] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<keyof typeof opticalVariants>(0);
  const handleNavigation = useCallback((e: Event, change: boolean) => {
    const window = e.currentTarget as Window;
    if (window.scrollY == 0 || !window.scrollY) {
      setOpacity(0);
      setChange(false);
    }
    if (window.scrollY > 200) {
      if (change == false) setChange(true);
    } else {
      if (change == true) setChange(false);
    }

    if (window.scrollY > 50) setOpacity(10);
    if (window.scrollY > 100) setOpacity(20);
    if (window.scrollY > 150) setOpacity(30);
    if (window.scrollY > 200) setOpacity(40);
    if (window.scrollY > 250) setOpacity(50);
    if (window.scrollY > 300) setOpacity(60);
    if (window.scrollY > 400) setOpacity(80);
    if (window.scrollY > 500) setOpacity(100);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", (event: Event) =>
      handleNavigation(event, change)
    );

    return () => {
      window.removeEventListener("scroll", (event: Event) =>
        handleNavigation(event, change)
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleNavigation]);

  const copyLink = () => {
    navigator.clipboard.writeText(location.href);
    dispatch(openDialog({ message: "Đã copy link sản phẩm" }));
  };
	return (
		<div
			className={`${styles.heard} bg-[#f8f8f8] ${opticalVariants[opacity]} ${change ? " text-black" : "text-white"}`}>
			<div
				onClick={() => router.back()}
				className={`${styles.back} ${change ? "" : styles.bg_black}`}
			>
				<AiOutlineLeft className={styles.icon} />
			</div>
			<div
				onClick={() => router.push("/tim-kiem")}
				className={`${styles.search} ${change ? "" : styles.bg_black}`}
			>
				<AiOutlineSearch className={styles.icon} />
			</div>
			<div
				onClick={() => router.push("/cart")}
				className={`${styles.cart} ${change ? "" : styles.bg_black}`}
			>
				<AiOutlineShoppingCart className={styles.icon} />
			</div>
			<div
				onClick={copyLink}
				className={`${styles.share} ${change ? "" : styles.bg_black}`}
			>
				<AiOutlineShareAlt className={styles.icon} />
			</div>
			<div
				onClick={() => router.push("/")}
				className={`${styles.home} ${change ? "" : styles.bg_black}`}
			>
				<AiOutlineHome className={styles.icon} />
			</div>
		</div>
	);
	}
