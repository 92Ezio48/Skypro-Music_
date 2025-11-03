'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from './store';

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    storeRef.current = makeStore();
    console.log('[Redux] Store created:', storeRef.current);
    if (typeof window !== 'undefined') {
      // @ts-ignore
      window.__MY_STORE = storeRef.current;
    }
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
