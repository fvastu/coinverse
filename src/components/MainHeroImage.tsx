import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;
  return (
    <div className="animate-fadeInUp animate-duration-[1.5s] absolute bottom-0 inset-y-0 right-0 flex items-end justify-center below-lg:w-full">
      <img
        className="object-cover relative h-2/5 lg:h-5/6 xl:h-9/10 xl:h-full below-md:hidden"
        src={mainHero.img}
        alt="Mockup Coinverse application"
      />
      <style>{`
        @media (max-height: 800px) and (max-width: 1024px) {
          .below-md\\:hidden { display: none; }
        }

        @media (max-width: 300px) {
          .below-md\\:hidden { display: none; }
        }
      `}</style>
    </div>
  );
};

export default MainHeroImage;
