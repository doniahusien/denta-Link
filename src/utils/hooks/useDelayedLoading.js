// src/utils/hooks/useDelayedLoading.js
'use client';
import { useState, useEffect } from 'react';

export function useDelayedLoading(delay = 500) {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return showLoader;
}