import Rating from "@/components/Rating";
import { ProductDetail } from "@/types/Product";
interface Props {
	product:ProductDetail
}
export default function Info({product}:Props) {
	return (
		<div className="flex flex-col bg-white box-border px-[2.4vw] rounded-b-lg pt-[1.333vw] pb-[2.6667vw]">
			<div className="flex flex-row justify-self-start content-start">
				<span className="text-[4vw] block relative font-bold content-start items-center shrink-0 w-full whitespace-pre-wrap">
					{product.name}
				</span>
			</div>
			<div className="flex flex-row justify-self-start box-border content-start mt-[0.8vw]">
				<div className="flex relative font-bold box-border content-start w-1/4">
				<Rating
					className="flex flex-row box-broder content-start w-full"
					count={5}
					edit={false}
					value={4}
				/>
				</div>
				<div className="flex justify-end box-border grow ">
				<span className="text-[3.2vw] box-border text-[#999999] block relative text-right">
					Đã bán: {product.sold} {product.unit}
				</span>
				</div>
			</div>
		</div>
	);
}
