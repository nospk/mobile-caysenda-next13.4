
'use client';
import Link from 'next/link';
import {
  FaEllipsisH,
  FaUserEdit,
  FaCreativeCommonsNd,
  FaRegLaugh,
  FaRegEye
} from 'react-icons/fa';
import {
  IoIosArrowBack,
  IoIosArrowForward
} from 'react-icons/io';
import {FiLock } from 'react-icons/fi';
const SettingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-white rounded-lg px-2">
        <ul className="h-full w-full">
          <li className="border-b border-gray-300 py-4">
            <Link href="/change-avatar">
              <div className="flex">
                <div className="pr-2 flex-none">
                  <FaCreativeCommonsNd size={18} />
                </div>
                <div className="grow">Thay đổi Avatar</div>
                <IoIosArrowForward size={18} className="flex-none" />
              </div>
            </Link>
          </li>
          <li className="border-b border-gray-300 py-4">
            <div className="flex">
              <div className="pr-2 flex-none">
                <FaRegLaugh size={18} />
              </div>
              <div className="px-1 grow ">Tên Đăng Nhập</div>
              <div className="flex-none px-4">Nomi</div>
            </div>
          </li>
          <li className="border-b border-gray-300 py-4">
            <div className="flex">
              <div className="pr-2 flex-none">
                <FiLock size={18} />
              </div>
              <div className="px-1 grow ">Số Điện Thoại</div>
              <div className="flex-none px-4">0123456789</div>
            </div>
          </li>
          <li className="py-4">
            <Link href="/change-password">
              <div className="flex">
                <div className="pr-2 flex-none">
                  <FaRegEye size={18} />
                </div>
                <div className="grow">Đổi Mật Khẩu</div>
                <IoIosArrowForward size={18} className="flex-none" />
              </div>
            </Link>
          </li>
          <li className="border-b border-gray-300 py-4">
            <Link href="/change-address">
              <div className="flex">
                <div className="pr-2 flex-none">
                  <FaUserEdit size={18} />
                </div>
                <div className="grow">Địa Chỉ Giao Hàng</div>
                <IoIosArrowForward size={18} className="flex-none" />
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="absolute inset-x-0 bottom-0 pt-4 pb-2 mb-0">
        <Link href="/logout" className="w-14">
          <div className="block text-center text-red-500 hover:text-red-600 font-semibold mt-4 mb-4 text-xl">
            Đăng xuất
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SettingPage;

