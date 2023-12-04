"use client";
import { AiOutlineRight } from "react-icons/ai";
import styles from "./ProductDetail.module.css";
import { ProductDetail } from "@/types/product";
import Link from "next/link";
import AccountService from "@/services/Account.service";
import { useEffect } from "react";
interface Props {
  product: ProductDetail;
}

export default function Detail({ product }: Props) {
  useEffect(() => {
    AccountService.SetProductRecent(product);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className={styles.wrapper_detail}>
        <div className="box-border flex flex-row rounded-lg bg-white px-[2.4vw] py-[4.2667vw] ">
          <div className="height-[5.3333vw] box-broder relative mr-[5.3333vw] flex flex-row content-start items-center">
            <span className="relative box-border block shrink-0 text-[3.4667vw] text-[#999999]">Giao Hàng</span>
          </div>
          <div className="relative box-border flex shrink-0 grow flex-row items-center pl-[1.0667vw] pr-[1.3333vw]">
            <div className="block flex-1 overflow-hidden">
              <span className="text-[3.4667vw] leading-[3.4667vw]">Thời gian 3 - 8 Ngày (Tùy Khu Vực)</span>
            </div>
          </div>
          <AiOutlineRight className="ml-[1.3333vw] mt-[0.73333vw] h-[4vw] w-[3vw] text-[#999999]" />
        </div>
      </div>
      <div className="mt-3 bg-white pb-5 pt-5">
        <table>
          <tbody>
            <tr>
              <td className="mt-[2px] flex" width={100}>
                <span className="relative box-border block shrink-0 text-sm text-[#999999]">Tên Sản Phẩm:</span>
              </td>
              <td>
                <span className="text-sm">{product.name}</span>
              </td>
            </tr>
            <tr>
              <td className="mt-[2px] flex" width={100}>
                <span className="relative box-border block shrink-0 text-sm text-[#999999]">SKU:</span>
              </td>
              <td>
                <span className="text-sm">{product.sku}</span>
              </td>
            </tr>
            <tr>
              <td className="mt-[2px] flex" width={100}>
                <span className="relative box-border block shrink-0 text-sm text-[#999999]">Danh mục:</span>
              </td>
              <td>
                <Link href={"/" + product.category_slug} className="text-blue-700">
                  <span className="text-[3.4667vw] text-sm leading-[3.4667vw]">{product.category_name}</span>
                </Link>
              </td>
            </tr>
            <tr>
              <td className="mt-[2px] flex" width={100}>
                <span className="relative box-border block shrink-0 text-sm text-[#999999]">Sử dụng:</span>
              </td>
              <td>
                <span className="text-sm">{product.description}</span>
              </td>
            </tr>
            <tr>
              <td className="mt-[2px] flex" width={100}>
                <span className="relative box-border block shrink-0 text-sm text-[#999999]">Tải ảnh:</span>
              </td>
              <td>
                <Link href={""}>
                  <span className="text-sm leading-[3.4667vw] text-[#023cf8]">Nhấn để tải</span>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
