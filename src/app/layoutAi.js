// src/app/layoutAi.js
import { Suspense } from 'react';
import DelayedLoader from '@/components/UI/Loader/DelayedLoader';

export default function AiLayout({ children }) {
  return (
    <Suspense fallback={<DelayedLoader />}>
      {children}
    </Suspense>
  );
}