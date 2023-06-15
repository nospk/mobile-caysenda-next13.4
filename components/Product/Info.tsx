import Rating from "@/components/Rating";
export default function Info() {
  return (
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
  );
}
