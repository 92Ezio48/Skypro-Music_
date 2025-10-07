import MainNav from '../components/MainNavigation/MainNav';
import CenterTopBlock from '../components/CenterTopBlock/CenterTopBlock';
import SideBar from '../components/SideBar/SideBar';
import Bar from '../components/Bar/Bar';
import CenterContent from '../components/CenterContent/CenterContent';
export default function Home() {
  return (
    <div className="wrapper">
      <div className="app-content">
        {/* Левый вертикальный nav */}
        <MainNav />
        {/* Центральный контент */}
        <main className="main-content">
          <CenterTopBlock />
          <CenterContent />
        </main>
        {/* Сайдбар справа */}
        <SideBar />
      </div>
      <Bar />
      <footer className="footer"></footer>
    </div>
  );
}
