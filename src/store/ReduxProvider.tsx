'use client';

import { useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from './store';

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>(undefined!);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  // "window" только на клиенте, поэтому в useEffect
  useEffect(() => {
    // @ts-ignore
    window.__MY_STORE = storeRef.current;
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
