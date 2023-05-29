
import { IoSettingsOutline, IoChevronForwardOutline } from 'react-icons/io5';
import Link from 'next/link'
import { Icon } from '@/components/Icon';
import Order from '@/components/Order';
import Menu from '@/components/Menu';
import Setting from '@/components/Setting'
export default async function Page() {
	return (
		<>
			<div className="m-[2.4vw] space-y-6">
				<div className="flex relative justify-center items-center">
					<div className="flex gap-x-1">
						<div className="flex-1">
							<Icon
								className="border-2 rounded-full border-yellow-400 w-[60px] h-[60px]"
								src="https://images.unsplash.com/photo-1676664506255-d0f9634f103d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzUxNDczMg&ixlib=rb-4.0.3&q=80&w=500"
								alt="Avatar user"
								isCricle={true}
							/>
						</div>
						<div className="flex-1 min-w-fit">
							<h2 className="text-xl font-bold">username</h2>
							<span className="text-white bg-black rounded-md p-0.5 mx-0.5">
								PLUS
							</span>
							<span className="whitespace-nowrap">
								Thẻ thành viên
								<IoChevronForwardOutline className="inline" size="21" />
							</span>
						</div>
					</div>
					<div className="grow"></div>
					<Link href={'./Setting'}>
					<div className="flex-none">
						<IoSettingsOutline className="ml-auto mr-auto" size="30" />
						
						<span>Cài Đặt</span>
					</div>
					</Link>
				</div>
				<div className="flex flex-col space-y-4">
					<div className="flex items-center justify-start bg-amber-600 py-5 rounded-lg">
						<span className="text-white bg-black inline-block rounded-md p-1 mx-2 ">
							PLUS
						</span>
						Thẻ PLUG GIẢM 5% mọi đơn hàng trong tháng 3
					</div>

					<div className="bg-white rounded-lg px-2 py-5">
						<p className=" text-lg font-semibold">Đơn Hàng Của Tôi</p>
						<div className="">
							<Order />
						</div>
					</div>
					<div className="bg-white rounded-lg px-2 py-5">
						<p className=" text-lg font-semibold">Sản Phẩm Quan Tâm</p>
					</div>
					<div className="bg-white rounded-lg px-2 py-5">
						<Menu showCategory={false} />
					</div>
				</div>
			</div>
		</>
	);
};
