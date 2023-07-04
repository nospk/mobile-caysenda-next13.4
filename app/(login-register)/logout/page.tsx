'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Loading from '@/components/Loading';
const LogoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem('user_id');
    localStorage.removeItem('token');
    router.push('/account');
  });

  return <div><Loading/></div>;
};

export default LogoutPage;
