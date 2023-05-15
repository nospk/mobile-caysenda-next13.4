import { AiOutlineEye, AiOutlineMessage } from 'react-icons/ai';
export default function AddToCart() {
	return (
		<>
			<div className="flex flex-row bottom-0 fixed z-50 bg-white box-border pt-[2vw] pb-[1.3333vw] px-[3.2vw] w-full shadow-md border-t-[0.13333vw] h-[9.86667vw]">
				<div className="flex flex-row w-1/2 shrink-0 justify-center items-center content-center">
					<div className="flex flex-col box-border shrink-0 px-[2vw] relative justify-center items-center content-center h-[8.66667vw] ">
						<AiOutlineEye className="text-[5vw]" />
						<span className="text-[#999999] text-[2.8vw]">Xem Nhiều Hơn </span>
					</div>
					<div className="flex flex-col box-border shrink-0 px-[2vw] relative justify-center items-center content-center h-[8.66667vw]">
						<AiOutlineMessage className="text-[5vw]" />
						<span className="text-[#999999] text-[2.8vw]">Nhắn Tin</span>
					</div>
				</div>

				<div className="flex grow justify-end w-1/2 shrink-0">
					<button className="text-[3.4667vw] relative bg-[#FEA200] px-[3.4667vw] justify-center items-center font-bold rounded-full text-white">
						Thêm vào giỏ hàng
					</button>
				</div>
			</div>
		</>
	);
}
