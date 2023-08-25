import { AiOutlineRight } from "react-icons/ai";
import styles from './ProductDetail.module.css';
import { ProductDetail } from "@/types/product";
import Link from "next/link";

interface Props {
	product: ProductDetail
}

export default function Detail({product}:Props) {
	return (
		<>
			<div className={styles.wrapper_detail}>
				<div className="flex flex-row px-[2.4vw] py-[4.2667vw] bg-white rounded-lg box-border ">
				<div className="flex flex-row height-[5.3333vw] mr-[5.3333vw] items-center box-broder relative content-start">
					<span className="text-[3.4667vw] text-[#999999] shrink-0 relative box-border block">
					Giao Hàng
					</span>
				</div>
				<div className="flex flex-row grow box-border shrink-0 items-center relative pl-[1.0667vw] pr-[1.3333vw]">
					<div className="block flex-1 overflow-hidden">
					<span className="text-[3.4667vw] leading-[3.4667vw]">
						Thời gian 3 - 8 Ngày (Tùy Khu Vực)
					</span>
					</div>
				</div>
				<AiOutlineRight className="text-[#999999] w-[3vw] h-[4vw] ml-[1.3333vw] mt-[0.73333vw]" />
				</div>
			</div>
			<div className="pt-5 pb-5 bg-white mt-3">
				<table>
					<tbody>
						<tr>
							<td className="flex mt-1" width={100}><span className="text-[3.4667vw] text-[#999999] shrink-0 relative box-border block">Tên Sản Phẩm:</span></td>
							<td><span className="text-sm">{product.name}</span></td>
						</tr>
						<tr>
							<td className="flex mt-1" width={100}><span className="text-[3.4667vw] text-[#999999] shrink-0 relative box-border block">SKU:</span></td>
							<td><span className="text-sm">{product.sku}</span></td>
						</tr>
						<tr>
							<td className="flex mt-1" width={100}><span className="text-[3.4667vw] text-[#999999] shrink-0 relative box-border block">Danh mục:</span></td>
							<td>
								<Link href={"/" + product.category_slug} className="text-blue-700"><span className="text-[3.4667vw] leading-[3.4667vw] text-sm">{product.category_name}</span></Link>
							</td>
						</tr>
						<tr>
							<td className="flex mt-1" width={100}><span className="text-[3.4667vw] text-[#999999] shrink-0 relative box-border block">Sử dụng:</span></td>
							<td><span className="text-sm">{product.description}</span></td>
						</tr>
						<tr>
							<td className="flex mt-1" width={100}><span className="text-[3.4667vw] text-[#999999] shrink-0 relative box-border block">Tải ảnh:</span></td>
							<td>
								<Link href={""}>
									<span className="text-[3.4667vw] leading-[3.4667vw] text-[#023cf8] text-sm">
										Nhấn để tải
									</span>
								</Link>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			
		</>
	);
}
