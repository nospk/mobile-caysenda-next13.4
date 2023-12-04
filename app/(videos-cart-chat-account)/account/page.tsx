import { IoSettingsOutline, IoChevronForwardOutline } from "react-icons/io5";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import OrderMenu from "@/components/Order/OrderMenu";
import Menu from "@/components/Menu";
import AccountService from "@/services/Account.service";
import { FcPaid } from "react-icons/fc";
import ProductRecent from "./_component/ProductRecent";
import ProductRelated from "./_component/ProductRelated";
export const dynamic = "force-dynamic";
type User = {
  name: string;
  avatar: string;
  phone: string;
  vip: number;
};
const VIP_TYPE = ["VIP1", "VIP2", "VIP3", "VIP4", "PLUS"];
export default async function Page() {
  const user: User = await AccountService.GetDataUser();

  return (
    <>
      <div className="h-full space-y-3 overflow-scroll px-[2.4vw] pt-[2.4vw]">
        <div className="relative flex items-center justify-center">
          <div className="flex gap-x-1">
            <div className="flex-1">
              <Icon
                className="h-[60px] w-[60px] rounded-full border-2 border-yellow-400"
                src={user.avatar}
                alt="Avatar user"
                isCricle={true}
              />
            </div>
            <div className="min-w-fit flex-1">
              <h2 className="text-xl font-bold">{user.name}</h2>
              <span className="mx-0.5 rounded-md bg-black p-0.5 text-white">{VIP_TYPE[user.vip - 1]}</span>
              <span className="whitespace-nowrap">
                Thẻ thành viên
                <IoChevronForwardOutline className="inline" size="21" />
              </span>
            </div>
          </div>
          <div className="grow"></div>
          <Link href={"/setting"}>
            <div className="flex-none">
              <IoSettingsOutline className="ml-auto mr-auto" size="30" />

              <span>Cài Đặt</span>
            </div>
          </Link>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-start rounded-lg bg-amber-600 py-3 text-sm">
            <span className="mx-2 inline-block rounded-md bg-black p-1 text-white ">{VIP_TYPE[user.vip - 1]}</span>
            Thẻ {VIP_TYPE[user.vip - 1]} GIẢM {user.vip}% mọi đơn hàng trong tháng {new Date().getMonth() + 1}
          </div>

          <div className="rounded-lg  bg-white px-2 py-3">
            <span className="text-lg font-semibold">Đơn Hàng Của Tôi</span>
            <div className="relative">
              <OrderMenu />
            </div>
          </div>
          <ProductRecent />
          <div className="rounded-lg bg-white px-2 py-3">
            <Menu showCategory={false} nav={[]} />
          </div>
        </div>
        <ProductRelated />
      </div>
    </>
  );
}
