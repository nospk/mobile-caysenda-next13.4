// settings.tsx

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const SettingsPage: React.FC = () => {
  const links = [
    { href: "/change-avatar", text: "Thay đổi Avatar" },
    { href: "", text: "Tên Người Dùng" },
    { href: "", text: "Số Điện Thoại" },
    { href: "/change-password", text: "Thay đổi Mật khẩu" },
    { href: "/shipping-address", text: "Địa chỉ giao hàng" },
    { href: "/logout", text: "Đăng xuất" },
  ];

  return (
    <div className="bg-cover bg-fixed" style={{ backgroundImage: "url('/background.jpg')" }}>
      <Head>
        <title>Cài Đặt - YourSite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-between bg-white py-6 px-8">
        <h1 className="text-3xl font-bold text-gray-800">Cài Đặt</h1>
        <div className="flex items-center space-x-4">
          <Link href="/notifications" legacyBehavior>
            <a className="flex items-center">
              <FontAwesomeIcon icon={faEllipsisH} className="ml-2 text-gray-500 w-4 h-4" />
            </a>
          </Link>
        </div>
      </div>

      <div>
        <div className="w-full flex-grow">
          <div className="bg-white shadow-lg flex-grow">
            <div className="px-6 py-4">
              {/* links */}
              <ul>
                {links.slice(0, 5).map((link) => (
                  <li key={link.href}>
                    <div className="p-3 border-t border-gray-500">
                      <Link href={link.href} legacyBehavior>
                        <a className="text-gray-500 hover:text-black">{link.text}</a>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>

              <hr className="my-4 border-gray-500" />

              {/* Đăng xuất */}
              <div className="relative">
                <ul className="flex justify-center">
                  <li key={links[5].href}>
                    <div className="p-3">
                      <Link href={links[5].href} legacyBehavior>
                        <a className="text-red-500 font-medium hover:text-black">{links[5].text}</a>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
