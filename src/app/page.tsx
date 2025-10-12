import CenterTopBlock from '../components/CenterTopBlock/CenterTopBlock';
import CenterContent from '../components/CenterContent/CenterContent';

export default function Home() {
  return (
    <>
      <div className="center-top-block">
        <CenterTopBlock />
      </div>
      <div className="content__playlist">
        <CenterContent />
      </div>
    </>
  );
}
