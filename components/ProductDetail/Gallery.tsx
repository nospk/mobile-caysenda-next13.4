import Image from 'next/image';
export default function Gallery() {
	return (
		<>
			<div className="bg-white px-[2.4vw] w-full flex flex-col content-start relative box-border shrink-0 mt-[4.8vw] mb-[9.86667vw]">
				<div className="box-border items-center shrink-0 flex flex-col w-[96vw] h-[12vw] relative border-b-[1px]">
					<span className="text-[#FF6000] leading-[12vw] text-[4.2667vw] shrink-0 block relative whitespace-pre-wrap">
						Chi Tiết Sản Phẩm
					</span>
					<div className="bg-[#FF6000] box-border flex shrink-0 absolute h-[2px] bottom-0 left-0 right-0 w-[40vw] mx-auto"></div>
				</div>
				<div className="w-[96vw] relative h-[12vw]"></div>
				<div className="w-[96vw] relative">
					<Image
						src="https://caysenda.vn/resources/upload/18256595267_102253868.jpg"
						alt=""
						width={0}
						height={0}
						sizes="100vw"
						style={{ width: '100%', height: 'auto' }}
					/>
					<Image
						src="https://caysenda.vn/resources/upload/18182785960_102253868.jpg"
						alt=""
						width={0}
						height={0}
						sizes="100vw"
						style={{ width: '100%', height: 'auto' }}
					/>
					<Image
						src="https://caysenda.vn/resources/upload/17820403218_102253868.jpg"
						alt=""
						width={0}
						height={0}
						sizes="100vw"
						style={{ width: '100%', height: 'auto' }}
					/>
					<Image
						src="https://caysenda.vn/resources/upload/17893001024_102253868.jpg"
						alt=""
						width={0}
						height={0}
						sizes="100vw"
						style={{ width: '100%', height: 'auto' }}
					/>
					<Image
						src="https://caysenda.vn/resources/upload/17820406253_102253868.jpg"
						alt=""
						width={0}
						height={0}
						sizes="100vw"
						style={{ width: '100%', height: 'auto' }}
					/>
				</div>
			</div>
		</>
	);
}
