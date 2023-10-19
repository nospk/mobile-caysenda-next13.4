'use client';
import { useState } from 'react';

type ChangePasswordData = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const inputList = [
  { name: "current-password", label: "Mật Khẩu Cũ", placeholder: "Mật Khẩu Cũ" },
  { name: "new-password", label: "Mật khẩu Mới", placeholder: "Mật khẩu Mới" },
  { name: "re-new-password", label: "Nhập lại mật khẩu", placeholder: "Nhập lại mật khẩu" },
];

const ChangePasswordPage = () => {
  const [formData, setFormData] = useState<ChangePasswordData>({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const value = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field as keyof ChangePasswordData]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Gửi dữ liệu đổi mật khẩu tới server
    // Các xử lý logic khác...
  };

  return (
    <form className="h-screen w-full mt-10 flex flex-col items-center" onSubmit={handleSubmit}>
      <div className="mt-3 mb-4">
      </div>
      {inputList.map(({ name, label, placeholder }) => (
        <div key={name} className='w-full flex flex-col mb-5 px-4 rounded-full'>
          <input
            name={name}
            type='password'
            className='outline-none border-none text-base leading-6 w-full p-3 relative z-10 focus:outline-none focus:border-blue-400'
            id={name}
            tabIndex={1}
            aria-label={label}
            placeholder={placeholder}
            autoCapitalize="off"
            onClick={e => handleSubmit}
            onChange={(e) => handleChange(e, name)}
            required
            autoComplete="on"
          />
          <div className='relative w-full h-1'>
            <div className='absolute left-0 right-0 bottom-0 w-full h-1 bg-gray-300'></div>
            <div className='absolute left-0 right-0 bottom-0 w-full h-1 bg-blue-500 transform scale-x-0 origin-bottom-left transition-transform duration-300 ease-in'></div>
          </div>
        </div>
      ))}
      <div className=' box-border flex justify-center items-center mt-1 px-4'>
        <button type="submit" tabIndex={3} className='w-full rounded-full text-white bg-[#ff4800] hover:bg-orange-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-[#ff4800] dark:hover:bg-orange-800 dark:focus:ring-blue-800'>
          Lưu Mật Khẩu
        </button>
      </div>
    </form>
  );
};

export default ChangePasswordPage;
