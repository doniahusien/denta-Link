'use client';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { setToken } from '@/redux/features/auth/authSlice';

const ProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const storedToken = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (storedToken) {
      dispatch(setToken(storedToken));
    }
    setIsLoading(false); 
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading && !token) {
      router.push('/login');
    }
  }, [token, router, isLoading]);

  if (isLoading || !token) return null; 

  return <>{children}</>;
};

export default ProtectedRoute;
