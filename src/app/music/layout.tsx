'use client';

import styles from '../music/main/page.module.css';
import MainNav from '@/components/MainNavigation/MainNav';
import SideBar from '@/components/SideBar/SideBar';
import Bar from '@/components/Bar/Bar';
import ReduxProvider from '@/store/ReduxProvider';
import { usePathname } from 'next/navigation';

export default function AppProviders({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith('/auth');

  return (
    <ReduxProvider>
      <div className={styles.wrapper}>
        <div className={styles.appContent}>
          {!isAuthPage && <MainNav />}
          <main className={styles.mainContent}>{children}</main>
          {!isAuthPage && <SideBar />}
        </div>
        {!isAuthPage && <Bar />}
      </div>
    </ReduxProvider>
  );
}
