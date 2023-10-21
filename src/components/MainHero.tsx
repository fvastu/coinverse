import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main className="mt-16 px-10 sm:px-6 mx-auto max-w-7xl lg:px-8">
      <div className="text-center lg:text-left flex flex-col justify-center">
        <h1
          className={`animate-fadeInUp animate-delay-[300ms] text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl`}
        >
          <span className="block">{mainHero.title}</span>
          <span className="block text-primary">{mainHero.subtitle}</span>
        </h1>
        <p
          className={`animate-fadeInUp animate-delay-[600ms] mt-6 text-base text-secondary sm:text-lg sm:max-w-xl sm:mx-auto md:mt-6 md:text-xl lg:mx-0 lg:pr-40`}
        >
          {mainHero.description}
        </p>
        <div className="animate-fadeInUp animate-delay-[900ms] mt-6 sm:mt-6 lg:max-w-xl sm:flex sm:flex-col sm:justify-center lg:justify-start lg:pr-40">
          <div className="mb-3 lg:max-w-xl">
            <input
              placeholder="Your Email"
              className="mt-4 px-6 py-3 rounded-md shadow w-full sm:w-8/12 md:w-6/12 lg:w-full"
            />
          </div>
          <div className="rounded-md shadow flex items-center justify-center">
            <a
              href={mainHero.primaryAction.href}
              className={`
                w-full sm:w-8/12 md:w-6/12 text-center lg:w-full px-8 py-3
                border border-transparent text-base font-medium rounded-md text-background
                bg-primary hover:bg-border hover:text-primary md:py-3 lg:text-lg md:px-10
              `}
            >
              {mainHero.primaryAction.text}
            </a>
          </div>
        </div>
        <p className="animate-fadeInUp animate-delay-[1200ms] block text-sm text-secondary mt-6 sm:mt-6 lg:max-w-xl">
          {mainHero.message.text}
        </p>
      </div>
    </main>
  );
};

export default MainHero;
