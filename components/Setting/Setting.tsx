"use client";
import Link from "next/link";
import {
  FaEllipsisH,
  FaUserEdit,
  FaCreativeCommonsNd,
  FaRegLaugh,
  FaRegEye,
} from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiLock } from "react-icons/fi";
const SettingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="rounded-lg bg-white px-2">
        <ul className="h-full w-full text-[#909090]">
          <li className="py-4">
            <div className="flex content-center">
              <div className="min-h-[26px] flex-none content-center pr-2">
                <FaRegLaugh
                  size={18}
                  className="inline-flex content-center text-[#666]"
                />
              </div>
              <div className="grow">Tên Đăng Nhập</div>
              <div className="flex-none px-4 text-black">Nomi</div>
            </div>
          </li>
          <div className="absolute h-4 w-full left-0 bg-[#f8f8f8]"></div>
          <li className="border-b border-gray-300 py-4 mt-4">
            <Link href="/change-avatar">
              <div className="flex content-center">
                <div className="min-h-[26px] flex-none content-center pr-2">
                  <FaCreativeCommonsNd
                    size={18}
                    className="inline-flex content-center text-[#666]"
                  />
                </div>
                <div className="grow">Thay đổi Avatar</div>
                <div className="min-h-[26px] flex-none content-center">
                  <IoIosArrowForward
                    size={18}
                    className="inline-flex content-center text-[#666]"
                  />
                </div>
              </div>
            </Link>
          </li>
          <li className="content-center border-b border-gray-300 py-4">
            <div className="flex content-center">
              <div className="min-h-[26px] flex-none content-center pr-2">
                <FiLock
                  size={18}
                  className="inline-flex content-center text-[#666]"
                />
              </div>
              <div className="grow">Số Điện Thoại</div>
              <div className="flex-none px-4 text-black">0123456789</div>
            </div>
          </li>
          <li className="border-b border-gray-300 py-4">
            <Link href="/change-password">
              <div className="flex content-center">
                <div className="min-h-[26px] flex-none content-center pr-2">
                  <FaRegEye
                    size={18}
                    className="inline-flex content-center text-[#666]"
                  />
                </div>
                <div className="grow">Đổi Mật Khẩu</div>
                <IoIosArrowForward size={18} className="flex-none" />
              </div>
            </Link>
          </li>
          <li className="border-b border-gray-300 py-4">
            <Link href="/change-address">
              <div className="flex content-center">
                <div className="min-h-[26px] flex-none content-center pr-2">
                  <FaUserEdit
                    size={18}
                    className="inline-flex content-center text-[#666]"
                  />
                </div>
                <div className="grow">Địa Chỉ Giao Hàng</div>
                <IoIosArrowForward size={18} className="flex-none" />
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
