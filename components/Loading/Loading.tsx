import { TailSpin } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="h-[50vw] block">
      <div className=" relative top-1/2 lef-1/2">
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );
}
