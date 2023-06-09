import {AiOutlineEnvironment, AiOutlineRight} from 'react-icons/ai'
import Image from 'next/image'
import { convertMoney } from "@/lib/formatPrice";
export default async function Page() {
	return <>
	<div className="box-border flex flex-col items-stretch w-[100vw] h-[calc(100dvh-14.6667vw)] bg-[#f0f0f0]">
		<div className="flex flex-col box-border flex-shrink-0 h-[100%]">
			<div className='flex flex-col box-border flex-shrink-0'>
				<div className="h-[11.7333vw] flex flex-row relative box-border flex-shrink-0 content-start items-center bg-gradient-to-b from-[#f5f5f5] ">
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
			</div>
			<div className="flex flex-col box-border p-[2.4vw] h-[70vw] flex-1 overscroll-none overflow-x-hidden overflow-y-scroll scrollbar-hide">
			<div className="block box-border flex-shrink-0">
				<div className='overflow-hidden flex flex-col flex-shrink-0 box-border'>
					<div className='flex flex-col flex-shrink-0 box-border'>
						<div className="flex flex-col mb-[3.2vw] text-[3.2vw] text-[#F66D09]">
							<span className="flex">Lưu ý: Khách Hàng Điền Đủ Thông Tin Giao Nhận</span>
							<span className="flex">Thời gian: Giao Hàng Dự Kiến 5 Tới 7 Ngày</span>
						</div>
						<div className="relative flex px-[2.4vw] text-[3.2222vw] mb-[2.4vw] font-semibold h-[10.66667vw] bg-[#f5ddcb] text-[#333] rounded-lg justify-center items-center">
								<span>ĐƠN HÀNG ĐỦ MỨC TỐI THIẾU MỚI BẤM ĐẶT HÀNG ĐƯỢC</span>
						</div>
						<div className="flex flex-col flex-shrink-0 box-border">	
							<div className="mb-[2.4vw] py-[2.4vw] box-border bg-white rounded-lg flex flex-col flex-shrink-0 content-start">
								<div className="px-[3.2vw] flex flex-col flex-shrink-0 content-start">
									<div className="flex flex-row items-center box-border flex-shrink-0 content-start">
										<div className="ml-[-2.4vw] pl-[2.66667vw] items-center flex flex-row relative content-start flex-shrink-0 box-border">
											<div className="rounded-full border-[0.26667vw] border-[#ddd] items-center content-start transition w-[5.33333vw] h-[5.33333vw]">
											</div>
											<div className="ml-[2.13333vw] relative flex flex-col flex-shrink-0 box-border"></div>
										</div>
										<div className="flex-1 flex flex-row items-center overflow-hidden box-border text-[2.6667vw]">
											<span className="text-[#333] truncate whitespace-nowrap block box-border">Quần áo thời</span>{'>'}
											<span className="text-red-700 whitespace-nowrap block box-border w-fit">Tối thiểu: 1.000K</span>{'>>'}
											<span className="text-[#333] whitespace-nowrap block box-border w-fit">Hiện tại: 249K</span>
										</div>
										<span className="ml-[1.6vw] text-[2.6667vw] text-blue-800 block whitespace-pre-wrap italic">Đặt Thêm</span>
									</div>
									<div className="pl-[7.46666vw] text-red-700 text-[2.6667vw]">
										<span>Chưa đạt mức tối thiểu của danh mục này</span>
									</div>
								</div>
								<div className="box-border flex flex-col flex-shrink-0">
									<div className="mt-[4vw] box-border flex flex-col flex-shrink-0">
										<div className="flex flex-row items-center px-[3.2vw] flex-shrink-0 box-border">
											<div className="ml-[-2.4vw] pt-[2.4vw] pb-[2.4vw] pl-[2.66667vw] flex flex-row items-center relative flex-shrink-0">
												<div className="rounded-full relative bg-[#ff4000] border-[#ff4000] border-[0.26667vw] content-start justify-center items-center flex flex-col transition w-[5.33333vw] h-[5.33333vw]">
													<span className="text-white text-[4.26667vw] text-center leading-none block box-border font-['Material_Icons'] before:content-['\e15b']"></span>
												</div>
												<div className="ml-[2.13333vw] relative flex flex-col flex-shrink-0 box-border"></div>
											</div>
											<div className="flex-1 items-center flex flex-row box-border content-start flex-shrink-0">
												<div className="relative mr-[2.4vw] box-border flex flex-col flex-shrink-0">
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
												<div className="flex flex-1 self-start content-start box-border flex-col overflow-hidden shrink-0 w-0">
													<span className="mb-[1.6vw] whitespace-nowrap truncate text-[3.46667vw] text-[#333333] font-medium box-border font-medium block">Chậu hình thú</span>
												</div>
											</div>
										</div>
									</div>
									<div className="flex flex-col flex-shrink-0 box-border">
										<div className="mt-[3.2vw] box-border flex flex-col flex-shrink-0">
											<div className="px-[3.2vw] flex flex-col flex-shrink-0 box-border">
												<div className="flex fex-row items-center box-border flex-shrink-0 justify-between">
													<div className="ml-[-2.4vw] pt-[2.4vw] pb-[2.4vw] pl-[2.66667vw] flex flex-row items-center relative flex-shrink-0">
														<div className="rounded-full relative bg-[#ff4000] border-[#ff4000] border-[0.26667vw] content-start justify-center items-center flex flex-col transition w-[5.33333vw] h-[5.33333vw]">
															<span className="text-white text-[4.26667vw] text-center leading-none block box-border font-['Material_Icons'] before:content-['\e876']"></span>
														</div>
														<div className="ml-[2.13333vw] relative flex flex-col flex-shrink-0 box-border">
														</div>
													</div>
													<div className="min-h-[6.93333vw] flex-1 flex flex-row content-between items-center box-border">
														<div className="w-[8vw] h-[8vw] block mr-[1.6vw]">
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
														<span className="flex flex-1 flex-row content-between items-center box-border p-[2.13333vw] bg-[#f9f9f9] text-[#666] text-[3.46667vw] rounded-lg">Thú hình Voi</span>
													</div>
												</div>
												<div className="ml-[7.46667vw] mt-[2.13333vw] min-h-[6.93333vw] flex flex-1 flex-row justify-between items-center box-border">
													<div className="flex flex-row box-border flex-shrink-0 text-[#FF4000]">
														<span
															className="relative box-border text-[3.2vw] leading-[3.2vw]"
														>
															{convertMoney(16000) + "K"}
															<span className="text-[2.93333vw] ml-[0.66667vw]">đ</span>
														</span>
													</div>
													<div className="text-[3.73333vw] relative flex flex-row items-center">
														<div className="box-border flex flex-shrink-0 flex-row items-center justify-start text-[3.73333vw] relative">
															<div
																className="box-border flex flex-col flex-shrink-0 p-[1.06667vw] justify-center items-center text-center border-x border-y border-solid border-[#CECECE] rounded-l-xl"
															>
																<div className="box-border flex flex-col flex-shrink-0 relative justify-center w-[4.26667vw] h-[4.26667vw]">
																	<div
																		className="box-border flex flex-col flex-shrink-0 relative self-center left-0 w-[3.2vw] h-[1px] rounded-xl bg-[#222222]"
																	></div>
																</div>
															</div>
															<input
																className="box-content relative w-[8.53333vw] p-[1.06667vw] text-[3.73333vw] text-center rounded-none border-y border-solid border-[#CECECE] h-[4.26667vw] outline-0 appearance-none align-middle placeholder-black focus:placeholder-white"
																placeholder="0"
																type="number"
																value={0}
															/>
															<div
																className="box-border flex flex-col flex-shrink-0 justify-center p-[1.06667vw] items-center text-center border-x border-y border-solid border-[#CECECE] rounded-r-xl "
															>
																<div className="box-border flex flex-col flex-shrink-0 relative justify-center w-[4.26667vw] h-[4.26667vw]">
																	<div
																		className="box-border flex flex-col flex-shrink-0 top-[1.6vw] self-center w-[3.2vw] h-[1px] rounded-xl bg-[#222222] relative"
																	></div>
																	<div
																		className="box-border flex flex-col flex-shrink-0 self-center w-[1px] h-[3.2vw] rounded-xl bg-[#222222] relative"
																	></div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="flex flex-row justify-between ml-[7.46667vw] box-border flex-shrink-0">
													<span className="flex-1 ml-[3.2vw] text-right text-[2.93333vw] text-[#FF4000] block box-border whitespace-pre-wrap">Yêu cầu tối thiểu : {2} {'Cái'}</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>	
						</div>
					</div>
				</div>
			</div>
			</div>
			<div className="block flex-shrink-0 bg-[#fff] box-border">
				<div className="box-border flex flex-col flex-shrink-0 content-start">
					<span className="bg-[#fff2e6] p-[2.4vw] text-[3.2vw] text-[#666] whitespace-pre-wrap box-border">Có {1} sản phẩm chưa đặt đủ số lượng hàng tối thiểu</span>
					<div className="flex flex-row justify-between items-center p-[2.66667vw] border-t border-solid border-[#e9e9e9]">
						<div className="ml-[-1.6vw] py-[2.4vw] pl-[2.66667vw] flex flex-row items-center box-border relative flex-shrink-0">
							<div className="rounded-full border-[0.26667vw] border-[#ddd] items-center content-start transition w-[5.33333vw] h-[5.33333vw]"></div>
							<span className="text-[#333] text-[3.2vw] ml-[2.13333vw] block box-border whitespace-pre-wrap">Tất Cả</span>
						</div>
						<div className="flex flex-1 flex-row items-center justify-end box-border">
							<div className="flex-1 mx-[2.66667vw] box-border flex flex-col">
								<div className="flex flex-1 flex-row justify-end items-baseline flex-wrap content-start">
									<div className="flex flex-row items-baseline flex-shrink-0 box-border text-[#FF4000]">
										<span className="text-[2.93333vw] block whitespace-pre-wrap box-border">Tổng Cộng: </span>
										<span className="text-[3.73333vw] block box-border whitespace-pre-wrap font-bold">{convertMoney(16000) + "K"}</span>
										<span className="ml-[0.66667vw]">đ</span>
									</div>
								</div>
							</div>
							<div className="box-border flex flex-col flex-shrink-0"> 
								<div className="min-w-[26.66667vw] text-[3.73333vw] leading-[3.73333vw] py-[2.93333vw] px-[4vw] text-white bg-gradient-to-r bg-[#ff602d] to-[#ff4000] rounded-full">
									<span>Mua Hàng</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</>;
}
