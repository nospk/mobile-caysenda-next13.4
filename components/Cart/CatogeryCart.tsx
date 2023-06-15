import ProductCart from './ProductCart'
export default function Catogery() {
  return (
    <div className="box-border flex flex-shrink-0 flex-col">
      <div className="mb-[2.4vw] box-border flex flex-shrink-0 flex-col content-start rounded-lg bg-white py-[2.4vw]">
        <div className="flex flex-shrink-0 flex-col content-start px-[3.2vw]">
          <div className="box-border flex flex-shrink-0 flex-row content-start items-center">
            <div className="relative ml-[-2.4vw] box-border flex flex-shrink-0 flex-row content-start items-center pl-[2.66667vw]">
              <div className="h-[5.33333vw] w-[5.33333vw] content-start items-center rounded-full border-[0.26667vw] border-[#ddd] transition"></div>
              <div className="relative ml-[2.13333vw] box-border flex flex-shrink-0 flex-col"></div>
            </div>
            <div className="box-border flex flex-1 flex-row items-center overflow-hidden text-[2.6667vw]">
              <span className="box-border block truncate whitespace-nowrap text-[#333]">
                Quần áo
              </span>
              {">"}
              <span className="box-border block w-fit whitespace-nowrap text-red-700">
                Tối thiểu: 1.000K
              </span>
              {">>"}
              <span className="box-border block w-fit whitespace-nowrap text-[#333]">
                Hiện tại: 249K
              </span>
            </div>
            <span className="ml-[1.6vw] block whitespace-pre-wrap text-[2.6667vw] italic text-blue-800">
              Đặt Thêm
            </span>
          </div>
          <div className="pl-[7.46666vw] text-[2.6667vw] text-red-700">
            <span>Chưa đạt mức tối thiểu của danh mục này</span>
          </div>
        </div>
        <ProductCart />
        
      </div>
    </div>
  );
}
