"use client";
import Link from "next/link";
import {
  FaAddressCard,
  FaUserCircle,
  FaPhoneAlt,
  FaUserAlt,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FiLock } from "react-icons/fi";
const SettingPage = () => {
  const user = {
    name: "Nospk",
    phone: "096277430",
  };

  return (
    <div className="bg-white">
      <div className="rounded-lg bg-white px-2">
        <ul className="w-full text-[#909090]">
          <li className="py-4">
            <div className="flex ">
              <div className="min-h-[26px] flex-none  pr-2">
                <FaUserAlt
                  size={18}
                  className="inline-flex self-center text-[#666]"
                />
              </div>
              <div className="grow self-center">Tên Đăng Nhập</div>
              <div className="flex-none px-4 text-black">{user.name}</div>
            </div>
          </li>
          <div className="absolute left-0 h-4 w-full bg-[#f8f8f8]"></div>
          <li className="mt-4 border-b border-gray-300 py-4">
            <Link href="/change-avatar">
              <div className="flex ">
                <div className="min-h-[26px] flex-none  pr-2">
                  <FaUserCircle
                    size={18}
                    className="inline-flex self-center text-[#666]"
                  />
                </div>
                <div className="grow self-center">Thay Đổi Avatar</div>
                <div className="min-h-[26px] flex-none ">
                  <IoIosArrowForward
                    size={18}
                    className="inline-flex self-center text-[#666]"
                  />
                </div>
              </div>
            </Link>
          </li>
          <li className=" border-b border-gray-300 py-4">
            <Link href="/change-phone">
              <div className="flex ">
                <div className="min-h-[26px] flex-none  pr-2">
                  <FaPhoneAlt
                    size={18}
                    className="inline-flex self-center text-[#666]"
                  />
                </div>
                <div className="grow self-center">Số Điện Thoại</div>
                <div className="flex-none self-center px-4 text-black">
                  {user.phone}
                </div>
                <IoIosArrowForward
                  size={18}
                  className="flex-none self-center text-[#666]"
                />
              </div>
            </Link>
          </li>
          <li className="border-b border-gray-300 py-4">
            <Link href="/change-password">
              <div className="flex ">
                <div className="min-h-[26px] flex-none  pr-2">
                  <FiLock
                    size={18}
                    className="inline-flex self-center text-[#666]"
                  />
                </div>
                <div className="grow self-center">Đổi Mật Khẩu</div>
                <IoIosArrowForward
                  size={18}
                  className="flex-none self-center text-[#666]"
                />
              </div>
            </Link>
          </li>
          <li className="border-b border-gray-300 py-4">
            <Link href="/change-address">
              <div className="flex ">
                <div className="min-h-[26px] flex-none  pr-2">
                  <FaAddressCard
                    size={18}
                    className="inline-flex self-center text-[#666]"
                  />
                </div>
                <div className="grow self-center">Địa Chỉ Giao Hàng</div>
                <IoIosArrowForward
                  size={18}
                  className="flex-none self-center text-[#666]"
                />
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="absolute inset-x-0 bottom-0 mb-0 border-t border-gray-300">
        <Link href="/logout" className="w-14">
          <div className="mb-4 mt-4 block text-center text-xl font-semibold text-red-500 hover:text-red-600">
            Đăng xuất
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SettingPage;
