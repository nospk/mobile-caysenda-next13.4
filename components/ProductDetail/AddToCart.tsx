import { AiOutlineEye, AiOutlineMessage } from 'react-icons/ai';
import AddToCartModal from '@/components/AddToCartModal';
export default function AddToCart() {
	return (
		<>
			<div className="flex flex-row bottom-0 fixed z-50 bg-white box-border pt-[1vw] pb-[0.86667vw] px-[3.2vw] w-full shadow-md border-t-[0.13333vw] h-[9.86667vw]">
				<div className="flex flex-row w-1/2 shrink-0 justify-center items-center box-border content-center">
					<div className="flex flex-col box-border shrink-0 px-[2vw] relative justify-center items-center content-center h-[8vw] ">
						<AiOutlineEye className="text-[5vw]" />
						<span className="text-[#999999] text-[2.8vw]">Xem Thêm</span>
					</div>
					<div className="flex flex-col box-border shrink-0 px-[2vw] relative justify-center items-center content-center h-[8vw]">
						<AiOutlineMessage className="text-[5vw]" />
						<span className="text-[#999999] text-[2.8vw]">Nhắn Tin</span>
					</div>
				</div>

				<div className="flex grow justify-end w-1/2 shrink-0">
					<AddToCartModal />
				</div>
			</div>
		</>
	);
}
