'use client';

import styles from '../music/main/page.module.css';
import MainNav from '@/components/MainNavigation/MainNav';
import SideBar from '@/components/SideBar/SideBar';
import Bar from '@/components/Bar/Bar';
import ReduxProvider from '@/store/ReduxProvider';
import { usePathname } from 'next/navigation';
import FetchingTracks from '@/components/FetchingTracks/FetchingTracks';
import { useInitAuth } from '@/hooks/useInitAuth';

export default function AppProviders({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith('/auth');
  useInitAuth();
  return (
    <div className={styles.wrapper}>
      <div className={styles.appContent}>
        {!isAuthPage && <MainNav />}
        <main className={styles.mainContent}>{children}</main>
        <FetchingTracks />

        {!isAuthPage && <SideBar />}
      </div>
      {!isAuthPage && <Bar />}
    </div>
  );
}
