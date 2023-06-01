import {AiOutlineEnvironment, AiOutlineRight} from 'react-icons/ai'
export default async function Page() {
	return <>
	<div className="box-border flex flex-col items-stretch w-[100vw] h-[calc(100vh-14.6667vw)]">
		<div className="flex flex-col box-border flex-shrink-0">
			<div className='flex flex-col box-border flex-shrink-0'>
				<div className="h-[11.7333vw] flex flex-row relative box-border flex-shrink-0 content-start items-center">
				<div className="flex flex-row flex-1 box-border items-center" >
					<span className="ml-[3.2vw] text-[4.233vw] font-bold text-[#222] block whitespace-pre-wrap">Địa chỉ</span>
					<div className="box-border flex flex-row items-center flex-1 max-w-[53.3333vw] mx-[1.6vw] ">
					<AiOutlineEnvironment className="w-[2.93333vw] h-[3.2vw] mr-[0.8vw] flex flex-shrink-0"/>
					<div className='flex flex-row items-center flex-1 box-border max-w-[calc(100%-3.73333vw)]'>
						<span className="block box-border text-[3.2vw] text-[#666] truncate ">24 Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, thành phố Hồ Chí Minh</span>
						<AiOutlineRight className="text-[#666] text-center flex-shrink-0 box-border w-[3.26667vw] h-[3.26667vw]"/>
					</div>				
					</div>
				</div>
				<div className="ml-auto items-center flex-row flex relative box-border flex-shrink-0">
					<span className='mr-[2.66667vw] text-[3.73333vw] block box-border whitespace-pre-wrap text-[#333333]'>Chi Tiết</span>
				</div>
			</div>
			<div className="flex flex-col ml-[3.2vw] text-[3.66667vw] text-[#FF4000]">
				<span className="flex">Lưu ý: Khách Hàng Điền Đủ Thông Tin Giao Nhận</span>
				<span className="flex">Thời gian: Giao Hàng Dự Kiến 5 Tới 7 Ngày</span>
			</div>
			</div>
			
			<div className="flex flex-col box-border relative p-[2.4vw] h-[70vw] flex-1 overscroll-none overflow-x-hidden overflow-y-scroll">
			b
			</div>
			<div className="block flex-shrink-0 bg-[#fff] box-border">
				c
			</div>
		</div>
	</div>
	</>;
}
