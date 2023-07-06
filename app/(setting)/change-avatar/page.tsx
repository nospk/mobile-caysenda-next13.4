'use client';
import { useState } from 'react';
import Image from 'next/image'
import Avatar from '@/components/Avatar';
const AvatarPage = async () => {
  const [avatar, setAvatar] = useState('/avatarzalo.jpg');
  

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Thực hiện xử lý tải lên hoặc xử lý ảnh ở đây
      // Ví dụ: Tải lên ảnh và nhận đường dẫn URL
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="h-screen">
      <form className="flex flex-col items-center justify-center mt-8">
        <h1 className="text-2xl font-bold mb-4">Nomi</h1>
        {avatar ? (
          <Image
            src={avatar}
            alt="Avatar"
            width={300}
            height={300}
            className="object-center rounded-full w-3/5 h-3/5 object-cover mb-4"
          />
        ) : ( 
          <div className="w-3/5 h-3/5 bg-gray-300 rounded-full mb-4"></div>
        )}
        <label className="box-border">
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="absolute h-0 w-0 overflow-hidden"
          />
          <span className="file-custom bg-[#ff4800] text-white py-2 px-4 rounded cursor-pointer">Choose file</span>
        </label>
      </form>
    </div>
  );
};

export default AvatarPage;
