import Rating from '@/components/Rating';
export default function Price() {
	return (
		<>
			<div className="px-[2.4vw] box-border w-full mt-[2.4vw] ">
				<div className="flex flex-row gap-2 bg-white box-border rounded-t-lg pt-[2.6667vw] px-[2.4vw] pb-[1.0667vw]">
					<div className="flex-1 flex-col w-[31.2vw] box-border ">
						<div className="flex flex-row text-[#FF4000] shrink-0 content-start items-end relative box-border font-medium">
							<span className="text-[6.4vw] content-start block box-border relative leading-[7.4667vw] shrink-0 ">
								25K
							</span>
							<span className="text-[3.2vw] leading-[5.3333vw] box-border block content-start shrink-0 relative ml-[0.5333vw]">
								đ
							</span>
						</div>
						<div className="flex flex-row shrink-0 box-border relative my-[0.8vw] ml-[0.8vw] content-start">
							<span className="text-[3.2vw] text-[#666666] block relative box-border leading-[3.7333vw] content-start">
								6 Cái
							</span>
						</div>
					</div>
					<div className="flex-1 flex-col w-[31.2vw] box-border ">
						<div className="flex flex-row text-[#FF4000] shrink-0 content-start items-end relative box-border font-medium">
							<span className="text-[6.4vw] content-start block box-border relative leading-[7.4667vw] shrink-0 ">
								22K
							</span>
							<span className="text-[3.2vw] leading-[5.3333vw] box-border block content-start shrink-0 relative ml-[0.5333vw]">
								đ
							</span>
						</div>
						<div className="flex flex-row shrink-0 box-border relative my-[0.8vw] ml-[0.8vw] content-start">
							<span className="text-[3.2vw] text-[#666666] block relative box-border leading-[3.7333vw] content-start">
								720-7199 Cái
							</span>
						</div>
					</div>
					<div className="flex-1 flex-col w-[31.2vw] box-border ">
						<div className="flex flex-row text-[#FF4000] shrink-0 content-start items-end relative box-border font-medium">
							<span className="text-[6.4vw] content-start block box-border relative leading-[7.4667vw] shrink-0 ">
								19K
							</span>
							<span className="text-[3.2vw] leading-[5.3333vw] box-border block content-start shrink-0 relative ml-[0.5333vw]">
								đ
							</span>
						</div>
						<div className="flex flex-row shrink-0 box-border relative my-[0.8vw] ml-[0.8vw] content-start">
							<span className="text-[3.2vw] text-[#666666] block relative box-border leading-[3.7333vw] content-start">
								≥7200 Cái
							</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col bg-white box-border px-[2.4vw] rounded-b-lg pt-[1.333vw] pb-[2.6667vw]">
					<div className="flex flex-row justify-self-start content-start">
						<span className="text-[4vw] block relative font-bold content-start items-center shrink-0">
							ZCT-1
						</span>
					</div>
					<div className="flex flex-row justify-self-start box-border content-start mt-[0.8vw]">
						<div className="flex relative font-bold box-border content-start shrink-0">
							<Rating
								className="flex flex-row box-broder shrink-0"
								count={5}
								edit={false}
								value={4}
							/>
						</div>
						<div className="flex justify-end box-border grow content-start shrink-0">
							<span className="text-[3.2vw] box-border text-[#999999] block relative text-right">
								Đã bán: 64 Cái
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
