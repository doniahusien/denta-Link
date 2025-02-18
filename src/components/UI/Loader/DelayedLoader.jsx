// src/components/UI/Loader/DelayedLoader.jsx
'use client';
import { useDelayedLoading } from '@/utils/hooks/useDelayedLoading';
import Loader from './Loader';

export default function DelayedLoader() {
  const showLoader = useDelayedLoading(500);

  if (!showLoader) return null;

  return <Loader />;
}