import {AiOutlineEnvironment, AiOutlineRight} from 'react-icons/ai'
import Image from 'next/image'
export default async function Page() {
	return <>
	<div className="box-border flex flex-col items-stretch w-[100vw] h-[calc(100vh-14.6667vw)]">
		<div className="flex flex-col box-border flex-shrink-0 h-[100%]">
			<div className='flex flex-col box-border flex-shrink-0'>
				<div className="h-[11.7333vw] flex flex-row relative box-border flex-shrink-0 content-start items-center">
				<div className="flex flex-row flex-1 box-border items-center" >
					<span className="ml-[3.2vw] text-[4.233vw] font-bold text-[#222] block whitespace-pre-wrap">Địa chỉ</span>
					<div className="box-border flex flex-row items-center flex-1 max-w-[53.3333vw] mx-[1.6vw] ">
					<AiOutlineEnvironment className="w-[2.93333vw] h-[3.2vw] mr-[0.8vw] flex flex-shrink-0"/>
					<div className='flex flex-row items-center flex-1 box-border w-0'>
						<span className="block box-border text-[3.2vw] text-[#666] truncate ">24 Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, thành phố Hồ Chí Minh</span>
						<AiOutlineRight className="text-[#666] text-center flex-shrink-0 box-border w-[3.26667vw] h-[3.26667vw]"/>
					</div>				
					</div>
				</div>
				<div className="ml-auto items-center flex-row flex relative box-border flex-shrink-0">
					<span className='mr-[2.66667vw] text-[3.73333vw] block box-border whitespace-pre-wrap text-[#333333]'>Chi Tiết</span>
				</div>
			</div>
			<div className="flex flex-col ml-[3.2vw] text-[3.2vw] text-[#F66D09]">
				<span className="flex">Lưu ý: Khách Hàng Điền Đủ Thông Tin Giao Nhận</span>
				<span className="flex">Thời gian: Giao Hàng Dự Kiến 5 Tới 7 Ngày</span>
			</div>
			</div>
			<div className="flex flex-col box-border p-[2.4vw] h-[70vw] flex-1 overscroll-none overflow-x-hidden overflow-y-scroll scrollbar-hide">
			<div className="block box-border flex-shrink-0">
				<div className='overflow-hidden flex flex-col flex-shrink-0 box-border'>
					<div className='flex flex-col flex-shrink-0 box-border'>
						<div className="relative flex px-[2.4vw] text-[3.2222vw] mb-[2.4vw] font-semibold h-[10.66667vw] bg-[#f5ddcb] text-[#333] rounded-lg justify-center items-center">
								<span>ĐƠN HÀNG ĐỦ MỨC TỐI THIẾU MỚI BẤM ĐẶT HÀNG ĐƯỢC</span>
						</div>
						<div className="flex flex-col flex-shrink-0 box-border">
							<div className="mb-[2.4vw] py-[2.4vw] box-broder bg-white rounded-lg flex flex-col flex-shrink-0 content-start">
								<div className="px-[3.2vw] flex flex-col flex-shrink-0 content-start">
									<div className="flex flex-row items-center box-broder flex-shrink-0 content-start">
										<div className="ml-[-2.4vw] pl-[2.66667vw] items-center flex flex-row relative content-start flex-shrink-0 box-broder">
											<div className="rounded-full border-[0.26667vw] border-[#ddd] items-center content-start transition w-[5.33333vw] h-[5.33333vw]">
											</div>
											<div className="ml-[2.13333vw] relative flex flex-col flex-shrink-0 box-broder"></div>
										</div>
										<div className="flex-1 flex flex-row items-center overflow-hidden box-broder text-[2.6667vw]">
											<span className="text-[#333] truncate whitespace-nowrap block box-broder">Quần áo thời dwadwadwadwadawdaw dwadawdwdawd</span>{'>'}
											<span className="text-red-700 whitespace-nowrap block box-broder w-fit">Tối thiểu: 1.000K</span>{'>>'}
											<span className="text-[#333] whitespace-nowrap block box-broder w-fit">Hiện tại: 249K</span>
										</div>
										<span className="ml-[1.6vw] text-[2.6667vw] text-blue-800 block whitespace-pre-wrap italic">Đặt Thêm</span>
									</div>
									<div className="pl-[7.46666vw] text-red-700 text-[2.6667vw]">
										<span>Chưa đạt mức tối thiểu của danh mục này</span>
									</div>
								</div>
								<div className="box-broder flex flex-col flex-shrink-0">
									<div className="mt-[4vw] box-broder flex flex-col flex-shrink-0">
										<div className="flex flex-row items-center px-[3.2vw] flex-shrink-0 box-broder">
											<div className="ml-[-2.4vw] pt-[2.4vw] pb-[2.4vw] pl-[2.66667vw] flex flex-row items-center relative flex-shrink-0">
												<div className="rounded-full border-[0.26667vw] border-[#ddd] items-center content-start transition w-[5.33333vw] h-[5.33333vw]"></div>
												<div className="ml-[2.13333vw] relative flex flex-col flex-shrink-0 box-broder"></div>
											</div>
										<div className="flex-1 items-center flex flex-row box-broder content-start flex-shrink-0">
											<div className="relative mr-[2.4vw] box-broder flex flex-col flex-shrink-0">
												<div className="w-[18.66667vw] h-[18.66667vw] block">
													<Image
														className="rounded-lg"
														src="https://caysenda.vn/resources/upload/22216875771_102253868.jpg"
														alt="test"
														sizes="100vw"
														width={0}
														height={0}
														style={{ width: '100%', height: '100%' }}
													/>
												</div>
											</div>
											<div className="flex flex-1 self-start content-start box-broder flex-col overflow-hidden shrink-0 w-0">
												<span className="mb-[1.6vw] whitespace-nowrap truncate text-[3.46667vw] box-broder font-medium block">Chậu hình thú Chậu hình thú Chậu hình thú Chậu hình thú</span>
												<span>a </span>
											</div>
										</div>
										</div>
									</div>
								</div>
							</div>	
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
							<div>a</div>
						</div>
					</div>
				</div>
			</div>
			</div>
			<div className="block flex-shrink-0 bg-[#fff] box-border">
				c
			</div>
		</div>
	</div>
	</>;
}
