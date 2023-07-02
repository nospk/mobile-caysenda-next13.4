
'use client';
import Link from 'next/link';
import { FaEllipsisH } from 'react-icons/fa';

const SettingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex justify-between items-center border-b-8 border-gray-300 h-16 py-4 px-8">

        <h1 className="flex flex-1 items-center text-xl font-bold">
          Cài đặt
        </h1>

        <div className="relative inline-block">
          <FaEllipsisH size={18} />
          <div className="bg-red-500 rounded-full flex items-center justify-center h-5 w-5 absolute -top-2 -right-3">
            <p className="text-white text-sm font-medium leading-none">
              2
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-md bg-white rounded-lg px-2">
        <ul className="">
          <li className="border-b border-gray-300 pt-4">
            <Link href="/change-avatar" legacyBehavior>
              <a className="block hover:text-red-500 mt-4 mb-4">Thay đổi Avatar</a>
            </Link>
          </li>
          <li className="border-b border-gray-300 pt-4">
            <Link href="/" legacyBehavior>
              <a className="block hover:text-red-500 mt-4 mb-4">
                Tên Người Dùng
              </a>
            </Link>
          </li>
          <li className="border-b border-gray-300 pt-4">
            <Link href="/" legacyBehavior>
              <a className="block hover:text-red-500 mt-4 mb-4">
                Số Điện Thoại
              </a>
            </Link>
          </li>
          <li className="border-b border-gray-300 pt-4">
            <Link href="/change-password" legacyBehavior>
              <a className="block hover:text-red-500 mt-4 mb-4">Thay đổi Mật khẩu</a>
            </Link>
          </li>
          <li className="border-b border-gray-300 pt-4">
            <Link href="/shipping-address" legacyBehavior>
              <a className="block hover:text-red-500 mt-4 mb-4">Địa chỉ giao hàng</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="absolute inset-x-0 bottom-0 border-b border-gray-300 pt-4 pb-2 mb-0">
            <Link href="/logout" legacyBehavior className="w-14">
              <a className="block text-center text-red-500 hover:text-red-600 font-semibold mt-4 mb-4 text-xl">
                Đăng xuất
              </a>
            </Link>
        </div>
    </div>
  );
};

export default SettingPage;

