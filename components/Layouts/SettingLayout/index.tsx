'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { IoIosArrowBack } from 'react-icons/io';
import { FaEllipsisH } from 'react-icons/fa';
const SettingLayout = ({ children }: { children: React.ReactNode }) => {
    const [title, setTitle] = useState('');
    const pathName = usePathname();
    const router = useRouter();
    useEffect(() => {
        if (pathName === '/change-password') {
            setTitle('Đổi Mật Khẩu');
        }
        else if (pathName === '/change-avatar') {
            setTitle('Đổi Avatar');
        }
        else if (pathName === '/change-address') {
            setTitle('Địa Chỉ Giao Hàng');
        }
        else {
            setTitle('Cài Đặt');
        }
    }, [pathName])
    return (
        <div className='bg-white'>
            <div className="flex justify-between content-center items-center border-b-8 border-[#f5f5f5] h-14">
                <div dir='rtl'>
                    <button type="button" onClick={() => router.back()} className="rounded-s-full bg-[#efefef] px-2 py-0.5">
                        <IoIosArrowBack size={18} />
                    </button>
                </div>
                <h2 className="flex flex-1 items-center text-xl font-bold pl-1">
                    {title}
                </h2>

                <div className="relative inline-block px-4 absolute top-2">
                    <FaEllipsisH size={18} />
                    <div className="bg-red-500 rounded-full flex items-center justify-center h-5 w-5 absolute -top-4 p-0.5">
                        <div className="text-white text-xs">
                            24
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
};

export default SettingLayout;
