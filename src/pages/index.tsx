import Analytics from '../components/Analytics';
import Header from '../components/Header';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';

const App = () => {
  return (
    <div className="h-screen">
      <div className="h-full">
        <div className="mx-auto bg-gradient-radial h-screen">
          <Header />
          <MainHero />
        </div>
        <MainHeroImage />
      </div>
      <Analytics />
    </div>
  );
};

export default App;
