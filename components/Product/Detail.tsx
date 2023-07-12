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
			<div className={styles.wrapper_detail}>
				<div className="flex flex-row px-[2.4vw] pt-[2.4vw] pb-[1.8667vw] bg-white rounded-lg box-border ">
				<div className="flex flex-row height-[5.3333vw] mr-[5.3333vw] items-center box-broder relative content-start">
					<span className="text-[3.4667vw] text-[#999999] shrink-0 relative box-border block">
					SKU
					</span>
				</div>
				<div className="flex flex-row grow box-border shrink-0 items-center relative pl-[1.0667vw] pr-[1.3333vw]">
					<div className="block flex-1 overflow-hidden">
					<span className="text-[3.4667vw] leading-[3.4667vw]">{product.sku}</span>
					</div>
				</div>
				</div>
				<div className="flex flex-row px-[2.4vw] py-[1.8667vw] bg-white rounded-lg box-border ">
				<div className="flex flex-row height-[5.3333vw] mr-[5.3333vw] items-center box-broder relative content-start">
					<span className="text-[3.4667vw] text-[#999999] shrink-0 relative box-border block">
					Danh Mục
					</span>
				</div>
				<div className="flex flex-row grow box-border shrink-0 items-center relative pl-[1.0667vw] pr-[1.3333vw]">
					<div className="block flex-1 overflow-hidden">
						<Link href={"/" + product.category_slug} className="text-blue-700"><span className="text-[3.4667vw] leading-[3.4667vw]">{product.category_name}</span></Link>
					</div>
				</div>
				</div>
				<div className="flex flex-row px-[2.4vw] py-[1.8667vw] bg-white rounded-lg box-border ">
				<div className="flex flex-row height-[5.3333vw] mr-[5.3333vw] items-center box-broder relative content-start">
					<span className="text-[3.4667vw] text-[#999999] shrink-0 relative box-border block">
					Tên Sản Phẩm
					</span>
				</div>
				<div className="flex flex-row grow box-border shrink-0 items-center relative pl-[1.0667vw] pr-[1.3333vw]">
					<div className="block flex-1 overflow-hidden">
					<span className="text-[3.4667vw] leading-[3.4667vw]">{product.name}</span>
					</div>
				</div>
				</div>
				<div className="flex flex-row px-[2.4vw] py-[1.8667vw] bg-white rounded-lg box-border ">
				<div className="flex flex-row height-[5.3333vw] mr-[5.3333vw] items-center box-broder relative content-start">
					<span className="text-[3.4667vw] text-[#999999] shrink-0 relative box-border block">
					Mã Sản Phẩm
					</span>
				</div>
				<div className="flex flex-row grow box-border shrink-0 items-center relative pl-[1.0667vw] pr-[1.3333vw]">
					<div className="block flex-1 overflow-hidden">
					<span className="text-[3.4667vw] leading-[3.4667vw]">{product.name}</span>
					</div>
				</div>
				</div>
				<div className="flex flex-col px-[2.4vw] py-[1.8667vw] bg-white rounded-lg box-border ">
				<div className="flex flex-row height-[5.3333vw] mr-[5.3333vw] items-center box-broder relative content-start">
					<span className="text-[3.4667vw] text-[#999999] shrink-0 relative box-border block">
					Sử dụng
					</span>
				</div>
				<div className="flex flex-row grow box-border shrink-0 items-center relative mt-[0.8vw]">
					<span className="text-[3.4667vw] leading-[4.4667vw] text-justify">{product.description}</span>
				</div>
				</div>
				<div className="flex flex-row px-[2.4vw] pb-[2.4vw] pt-[1.8667vw] bg-white rounded-lg box-border ">
				<div className="flex flex-row height-[5.3333vw] mr-[5.3333vw] items-center box-broder relative content-start">
					<span className="text-[3.4667vw] text-[#999999] shrink-0 relative box-border block">
					Tải ảnh
					</span>
				</div>
				<div className="flex flex-row grow box-border shrink-0 items-center relative pl-[1.0667vw] pr-[1.3333vw]">
					<div className="block flex-1 overflow-hidden">
					<span className="text-[3.4667vw] leading-[3.4667vw] text-[#023cf8] ">
						Nhấn để tải
					</span>
					</div>
				</div>
				</div>
			</div>
		</>
	);
}
