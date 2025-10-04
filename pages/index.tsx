import MainNav from '../components/MainNav';
import CenterBlock from '../components/CenterBlock';
import SideBar from '../components/SideBar';
import Bar from '../components/Bar';

export default function Home() {
  return (
    <div className="wrapper">
      <div className="app-content">
        {/* Левый вертикальный nav */}
        <MainNav />
        {/* Центральный контент */}
        <main className="main-content">
          <CenterBlock />
        </main>
        {/* Сайдбар справа */}
        <SideBar />
      </div>
      <Bar />
      <footer className="footer"></footer>
    </div>
  );
}
