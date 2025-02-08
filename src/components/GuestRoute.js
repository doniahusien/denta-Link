// src/components/GuestRoute.js
'use client';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const GuestRoute = ({ children }) => {
    const token = useSelector((state) => state.auth.token);
    const router = useRouter();

    useEffect(() => {
        if (token) {
            router.push('/');
        }
    }, [token, router]);

    if (token) {
        return null; 
    }

    return <>{children}</>;
};

export default GuestRoute;
